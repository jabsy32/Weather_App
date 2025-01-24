package com.pauljabs.Weather.app.controller;

import com.pauljabs.Weather.app.model.WeatherStory;
import com.pauljabs.Weather.app.service.WeatherScrapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:5173/")
public class WeatherNewsController {

    private final WeatherScrapper scrapper;

    public WeatherNewsController(WeatherScrapper scrapper) {
        this.scrapper = scrapper;
    }

    @GetMapping("/weather-stories")
    public List<WeatherStory> getWeatherNews() {

        return scrapper.getWeatherNews();
    }


}
