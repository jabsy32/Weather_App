package com.pauljabs.Weather.app.service;

import com.pauljabs.Weather.app.client.WeatherApiClient;
import com.pauljabs.Weather.app.dto.ForecastDto;
import com.pauljabs.Weather.app.exceptions.InvalidLocationException;
import com.pauljabs.Weather.app.exceptions.NoWeatherDataException;
import com.pauljabs.Weather.app.model.WeatherApiResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WeatherService {

    private final WeatherApiClient client;
    private WeatherApiResponse currentResponse;

    public WeatherService(WeatherApiClient client) {
        this.client = client;
    }

    public WeatherApiResponse getWeather(String location, boolean longerForecast) {

        if (location == null || location.isEmpty())
            throw new InvalidLocationException("Location cannot be found");

        int forecastDayLength = longerForecast ? 7 : 3;

        currentResponse = client.getWeather(location, forecastDayLength);
        System.out.println(currentResponse);
        return currentResponse;
    }

    public Optional<ForecastDto> getIndividualForecastDay(String currentDate) throws Exception {

        checkCurrentResponseIsValid();
        List<ForecastDto> forecasts = getForecasts();

        return forecasts.stream()
                .filter(forecast -> currentDate.equals(forecast.date()))
                .findFirst();
    }

    public List<ForecastDto> getForecasts() {

        checkCurrentResponseIsValid();
        List<ForecastDto> forecastList = currentResponse.forecast().forecastday();

        if (forecastList.isEmpty()) throw new NoWeatherDataException("No forecast data is available");

        return forecastList;
    }

    private void checkCurrentResponseIsValid() {
        if (currentResponse == null)
            throw new NoWeatherDataException("No location information present");
    }
}
