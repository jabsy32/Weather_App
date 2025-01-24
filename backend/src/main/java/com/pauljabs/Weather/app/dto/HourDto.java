package com.pauljabs.Weather.app.dto;

import com.pauljabs.Weather.app.model.Condition;

public record HourDto(
        long timeEpoch,
        String time,
        double temp_c,
        int isDay,
        Condition condition,
        double wind_mph,
        String wind_dir,
        double precip_mm,
        double snow_cm,
        int humidity,
        int cloud,
        double feelslike_c,
        double windchill_c,
        double heatindex_c,
        int will_it_rain,
        int chanceOfRain,
        int willItSnow,
        int chance_of_snow,
        double vis_miles,
        double gust_mph,
        double uv
) {
}
