package com.pauljabs.Weather.app.model;

import com.pauljabs.Weather.app.dto.AlertDto;

import java.util.List;

public record Alerts(
        List<AlertDto> alert
) {
}
