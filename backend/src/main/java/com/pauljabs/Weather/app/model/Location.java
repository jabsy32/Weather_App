package com.pauljabs.Weather.app.model;

public record Location(
        String name,
        String region,
        String country,
        double lat,
        double lon,
        String localtime
) {
}
