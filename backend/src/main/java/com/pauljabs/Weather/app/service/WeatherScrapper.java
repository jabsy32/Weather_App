package com.pauljabs.Weather.app.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pauljabs.Weather.app.model.WeatherStory;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class WeatherScrapper {

    private final static String DATA_FILE = "weather_stories.json";

    @Scheduled(fixedRate = 259200000)
    public void scheduleScrapping() {
        scrapWeatherNews();
    }

    public void scrapWeatherNews() {

        String url = "https://www.accuweather.com/en/weather-news";
        List<WeatherStory> stories = new ArrayList<>();

        try {
            Document doc = Jsoup.connect(url)
                    .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
                    .get();

            Elements storyElement = doc.select("div.featured-story");
            String title = storyElement.select("a.featured-story-info__title").text();
            String link = storyElement.select("a.featured-story-info__title").attr("href");
            String image = storyElement.select("img.js-content-image.featured-story__image").attr("data-src");
            
            stories.add(new WeatherStory(title, link, image));

            Elements midContanerElements = doc.select("div.middle-touts");
            Elements otherStoryElements = midContanerElements.select("a.middle-tout");

            for (Element story : otherStoryElements) {
                link = story.attr("href");
                title = getPageTitle(link);
                image = "";

                stories.add(new WeatherStory(title, link, image));
            }

            saveStoriesToFile(stories);

        } catch (IOException e) {
            System.out.println("Error in retrieving new stories: " + e);
        }
    }

    private String getPageTitle(String link) throws IOException {

        Document doc = Jsoup.connect(link)
                .userAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
                .get();

        return doc.select("div.two-column-page-content h1.title").text();

    }

    private void saveStoriesToFile(List<WeatherStory> stories) {


        try (FileWriter writer = new FileWriter(DATA_FILE)) {
            if (stories.isEmpty()) {
                writer.write("[]");  // Handle the case when there are no stories to write
            } else {
                writer.write("[\n");
            }
            for (int i = 0; i < stories.size(); i++) {

                WeatherStory story = stories.get(i);
                writer.write(String.format("  {\"title\": \"%s\", \"link\": \"%s\"}%s\n",
                        story.title(), story.link(), i < stories.size() - 1 ? "," : ""));
            }
            writer.write("\n]");

        } catch (IOException e) {
            System.err.println("Error saving stories to file: " + e);
        }
    }

    public List<WeatherStory> getWeatherNews() {

        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("weather_stories.json");

        if (!file.exists()) {
            return List.of();
        }

        try {
            return objectMapper.readValue(file, new TypeReference<List<WeatherStory>>() {
            });

        } catch (IOException e) {
            e.printStackTrace();
            return List.of();
        }
    }

}
