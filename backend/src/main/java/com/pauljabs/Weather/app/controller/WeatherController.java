package com.pauljabs.Weather.app.controller;

import com.pauljabs.Weather.app.dto.ForecastDto;
import com.pauljabs.Weather.app.model.CurrentForecast;
import com.pauljabs.Weather.app.model.WeatherApiResponse;
import com.pauljabs.Weather.app.service.WeatherService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:5173/")
public class WeatherController {

    private final WeatherService service;

    public WeatherController(WeatherService service) {
        this.service = service;
    }

/*
* Method for retrieving all the forecast information containing Location, current and Forecast
* @Param location = location of forecast
* @Param longerForecast determines where the forecast is 3 days long or 7 days
*  */
    @GetMapping("/forecast")
    public WeatherApiResponse getForecast(@RequestParam String location, @RequestParam(defaultValue = "true") boolean longerForecast){
        return service.getWeather(location, longerForecast);
    }

    @GetMapping("/current")
    public CurrentForecast getCurrentWeather(@RequestParam String location){
        return service.getWeather(location, false).current();
    }

    @GetMapping("/date")
    public Optional<ForecastDto> getWeatherByDate(@RequestParam String date) throws Exception {

        return service.getIndividualForecastDay(date);

    }

}
