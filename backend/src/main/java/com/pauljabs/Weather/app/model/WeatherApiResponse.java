package com.pauljabs.Weather.app.model;


public record WeatherApiResponse(
        Location location,
        CurrentForecast current,
        Forecast forecast,
        Alerts alerts
) {


}
