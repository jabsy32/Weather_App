package com.pauljabs.Weather.app.dto;

public record AlertDto(
        String headline,
        String severity,
        String urgency,
        String certainty,
        String event,
        String note,
        String effective,
        String expires,
        String desc,
        String instruction
) {
}
