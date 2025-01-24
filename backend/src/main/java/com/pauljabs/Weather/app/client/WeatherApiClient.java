package com.pauljabs.Weather.app.client;

import com.pauljabs.Weather.app.model.WeatherApiResponse;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Component
public class WeatherApiClient {

    private final WebClient webClient;
    private final Dotenv dotenv = Dotenv.configure()
            .directory("backend/src/main/resources/.env")
            .load();

    public WeatherApiClient(WebClient.Builder webClientBuilder) {
        String url = "http://api.weatherapi.com/v1";
        this.webClient = webClientBuilder.baseUrl(url).build();
    }

    public WeatherApiResponse getWeather(String location, int forecastLength) {

        String key = dotenv.get("WEATHER_API_KEY");

        URI uri = UriComponentsBuilder
                .fromHttpUrl("http://api.weatherapi.com/v1/forecast.json")
                .queryParam("key", key)
                .queryParam("q", location)
                .queryParam("days", forecastLength)
                .queryParam("aqi", "no")
                .queryParam("alerts", "yes")
                .build()
                .toUri();

        System.out.println(uri);


        // change to handle exceptions later
        return webClient
                .get()
                .uri(uriBuilder -> uriBuilder
                        .path("/forecast.json")
                        .queryParam("key", key)
                        .queryParam("q", location)
                        .queryParam("days", forecastLength)
                        .queryParam("alerts", "yes")
                        .build())
                .retrieve()
                .bodyToMono(WeatherApiResponse.class)
                .block();
    }
}
