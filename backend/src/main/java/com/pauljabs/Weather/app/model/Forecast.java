package com.pauljabs.Weather.app.model;

import com.pauljabs.Weather.app.dto.ForecastDto;

import java.util.List;

public record Forecast(
        List<ForecastDto> forecastday
) {
}
