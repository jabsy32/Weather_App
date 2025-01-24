package com.pauljabs.Weather.app.exceptions;

public class InvalidDateException extends RuntimeException{

    public InvalidDateException(String message) {
        super(message);
    }
}
