import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header.tsx";
import { useEffect, useState } from "react";
import DayForecast from "@/components/DayForecast.tsx";
import HourlyForecast from "@/components/HourlyForecast.tsx";
import DetailedDayForecast from "@/components/DetailedDayForecast.tsx";
import { useLocationContext } from "@/context/LocationContext";
import { backgrounds } from "@/lib/utils";
import { useAlertContext } from "@/context/AlertContext";
const WeatherForecast = () => {
    const location = useLocation();
    const weatherData = location.state;
    const [forecast, setForecast] = useState([]);
    const [index, setIndex] = useState(0);
    const [today, setToday] = useState(true);
    const [background, setBackground] = useState("");
    const { setSavedLocation } = useLocationContext();
    const { setSavedAlerts } = useAlertContext();
    useEffect(() => {
        try {
            const alertData = weatherData.alerts?.alert || [];
            setSavedAlerts(alertData);
            const forecastDays = weatherData.forecast.forecastday;
            setForecast(forecastDays);
            setSavedLocation(weatherData.location);
            const todayCondition = forecastDays[0]?.day.condition.text;
            const initialBackground = backgrounds(todayCondition);
            setBackground(initialBackground);
        }
        catch (error) {
            console.log(error);
        }
    }, [setSavedAlerts, setSavedLocation, weatherData]);
    console.log(weatherData);
    useEffect(() => {
        if (index !== 0)
            setToday(false);
        else
            setToday(true);
    }, [index]);
    return (_jsxs("div", { className: "flex flex-col h-screen", children: [_jsx("section", { children: _jsx(Header, {}) }), _jsxs("section", { className: "flex flex-col pl-5 pr-5 items-center", children: [_jsx("div", { className: "flex w-screen items-center justify-center", style: {
                            backgroundImage: `url(${background})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }, children: _jsx("div", { className: "flex items-center justify-center w-[70vw]", children: _jsx(DayForecast, { forecastData: forecast, setIndex: setIndex, location: weatherData.location, setBackground: setBackground }) }) }), _jsx("div", { className: "flex w-[70vw] justify-center", children: _jsx(HourlyForecast, { hours: forecast[index]?.hour, time: weatherData.location.localtime, today: today }) }), _jsx("div", { className: "flex w-[70vw] justify-center", children: _jsx(DetailedDayForecast, { astro: forecast[index]?.astro, day: forecast[index]?.day }) })] })] }));
};
export default WeatherForecast;
