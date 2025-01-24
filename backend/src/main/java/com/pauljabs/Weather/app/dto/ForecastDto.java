package com.pauljabs.Weather.app.dto;

import java.util.List;

public record ForecastDto(
        String date,
        long date_epoch,
        DayForecastDto day,
        AstroDto astro,
        List<HourDto> hour

) {
}
