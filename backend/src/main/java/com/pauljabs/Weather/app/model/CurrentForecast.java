package com.pauljabs.Weather.app.model;

public record CurrentForecast (
        double temp_c,
        double feelslike_c,
        Condition condition,
        int humidity,
        double wind_mph,
        double precip_mm
){
}
