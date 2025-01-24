package com.pauljabs.Weather.app.dto;

import com.pauljabs.Weather.app.model.Condition;

public record DayForecastDto(
        double maxtemp_c,
        double mintemp_c,
        double avgtemp_c,
        Condition condition,
        double avghumidity,
        double maxwind_mph,
        double precip_mm,
        double daily_chance_of_rain,
        double daily_chance_of_snow,
        double uv
) {
}
