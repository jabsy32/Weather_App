package com.pauljabs.Weather.app.exceptions;

public class NoWeatherDataException extends RuntimeException{

    public NoWeatherDataException(String message) {
        super(message);
    }
}
