import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Extract the day, month, and weekday
    const day = date.getDate();
    const weekday = date.toLocaleString("en-GB", { weekday: "long" });
    // Get the suffix for the day
    const suffix = getDaySuffix(day);
    // Return the formatted string with the suffix only on the day
    return `${weekday}  ${day}${suffix}`;
};
export const formatDateTime = (time) => {
    const date = new Date(time);
    // Format the date (DD/MM/YYYY)
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();
    // Format the time (HH:mm)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // Combine date and time
    return `${day}/${month}/${year} ${hours}:${minutes}`;
};
// Helper function to get the suffix for the day
export const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13)
        return "th"; // Special cases: 11th, 12th, 13th
    const lastDigit = day % 10;
    switch (lastDigit) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};
export function formatTimeUpdate(epoch) {
    const date = new Date(epoch); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}
export const getWeatherForecast = async (location) => {
    try {
        const response = await fetch(`http://localhost:8080/api/weather/forecast?location=${location}`);
        if (!response.ok) {
            return new Error("Could not fetch location");
        }
        return await response.json();
    }
    catch (error) {
        console.error("Error fetching weather forecast:", error);
        throw error;
    }
};
export const backgrounds = (condition) => {
    switch (condition) {
        case "Sunny":
        case "Clear":
            return "src/assets/images/sunny.jpg";
        case "Partly cloudy":
            return "src/assets/images/blue-sky-clouds.jpg";
        case "Cloudy":
            return "src/assets/images/cloudy.jpg";
        case "Overcast":
            return "src/assets/images/overcast.webp";
        case "Mist":
            return "src/assets/images/mist.jpg";
        case "Patchy rain nearby":
            return "src/assets/images/rainLight.jpg";
        case "Patchy snow possible":
            return "src/assets/images/snowing.jpg"; // Add your image path for Patchy snow possible
        case "Patchy sleet possible":
            return "src/assets/images/sleet.jpg"; // Add your image path for Patchy sleet possible
        case "Patchy freezing drizzle possible":
            return "src/assets/images/freezing-rain.jpg"; // Add your image path for Patchy freezing drizzle possible
        case "Thundery outbreaks possible":
            return "src/assets/images/thundery.jpg"; // Add your image path for Thundery outbreaks possible
        case "Blowing snow":
            return "src/assets/images/blowing-snow.jpg"; // Add your image path for Blowing snow
        case "Blizzard":
            return "src/assets/images/blizzard.jpg"; // Add your image path for Blizzard
        case "Fog":
            return "src/assets/images/fog.avif"; // Add your image path for Fog
        case "Freezing fog":
            return "src/assets/images/freezing-fog.jpg"; // Add your image path for Freezing fog
        case "Patchy light drizzle":
            return "src/assets/images/drizzle.jpg"; // Add your image path for Patchy light drizzle
        case "Light drizzle":
            return "src/assets/images/drizzle.jpg"; // Add your image path for Light drizzle
        case "Freezing drizzle":
            return "src/assets/images/freezing-drizzle.jpg"; // Add your image path for Freezing drizzle
        case "Heavy freezing drizzle":
            return "src/assets/images/freezing-drizzle.jpg"; // Add your image path for Heavy freezing drizzle
        case "Patchy light rain":
            return "src/assets/images/rainLight.jpg"; // Add your image path for Patchy light rain
        case "Light rain":
            return "src/assets/images/rainLight.jpg"; // Add your image path for Light rain
        case "Moderate rain at times":
            return "src/assets/images/moderate-rain.jpg"; // Add your image path for Moderate rain at times
        case "Moderate rain":
            return "src/assets/images/moderate-rain.jpg"; // Add your image path for Moderate rain
        case "Heavy rain at times":
            return "src/assets/images/heavy-rain.jpeg"; // Add your image path for Heavy rain at times
        case "Heavy rain":
            return "src/assets/images/heavy-rain.jpeg"; // Add your image path for Heavy rain
        case "Light freezing rain":
            return "src/assets/images/freezing-rain.jpg"; // Add your image path for Light freezing rain
        case "Moderate or heavy freezing rain":
            return "src/assets/images/freezing-rain.jpg"; // Add your image path for Moderate or heavy freezing rain
        case "Light sleet":
            return "src/assets/images/sleet.jpg"; // Add your image path for Light sleet
        case "Moderate or heavy sleet":
            return "src/assets/images/sleet.jpg"; // Add your image path for Moderate or heavy sleet
        case "Patchy light snow":
            return "src/assets/images/patchy-snow.webp"; // Add your image path for Patchy light snow
        case "Light snow":
            return "src/assets/images/light-snow.jpg"; // Add your image path for Light snow
        case "Patchy moderate snow":
            return "src/assets/images/light-snow.jpg"; // Add your image path for Patchy moderate snow
        case "Moderate snow":
            return "src/assets/images/snowing.jpg"; // Add your image path for Moderate snow
        case "Patchy heavy snow":
            return "src/assets/images/snowing.jpg"; // Add your image path for Patchy heavy snow
        case "Heavy snow":
            return "src/assets/images/snowing.jpg"; // Add your image path for Heavy snow
        case "Ice pellets":
            return "src/assets/images/ice-pellets.jpg"; // Add your image path for Ice pellets
        case "Light rain shower":
            return "src/assets/images/rainLight.jpg"; // Add your image path for Light rain shower
        case "Moderate or heavy rain shower":
            return "src/assets/images/freezing-rain.jpg"; // Add your image path for Moderate or heavy rain shower
        case "Torrential rain shower":
            return "src/assets/images/freezing-rain.jpg"; // Add your image path for Torrential rain shower
        case "Light sleet showers":
            return "src/assets/images/sleet.jpg"; // Add your image path for Light sleet showers
        case "Moderate or heavy sleet showers":
            return "src/assets/images/sleet.jpg"; // Add your image path for Moderate or heavy sleet showers
        case "Light snow showers":
            return "src/assets/images/snowing.jpg"; // Add your image path for Light snow showers
        case "Moderate or heavy snow showers":
            return "src/assets/images/snowing.jpg"; // Add your image path for Moderate or heavy snow showers
        case "Light showers of ice pellets":
            return "src/assets/images/ice-pellets.jpg"; // Add your image path for Light showers of ice pellets
        case "Moderate or heavy showers of ice pellets":
            return "src/assets/images/ice-pellets.jpg"; // Add your image path for Moderate or heavy showers of ice pellets
        case "Patchy light rain with thunder":
            return "src/assets/images/rain-Thunder.jpg"; // Add your image path for Patchy light rain with thunder
        case "Moderate or heavy rain with thunder":
            return "src/assets/images/rain-Thunder.jpg"; // Add your image path for Moderate or heavy rain with thunder
        case "Patchy light snow with thunder":
            return "src/assets/images/thunder-snow.jpg"; // Add your image path for Patchy light snow with thunder
        case "Moderate or heavy snow with thunder":
            return "src/assets/images/thunder-snow.jpg"; // Add your image path for Moderate or heavy snow with thunder
        default:
            return "src/assets/images/overcast.webp"; // Add a default image path
    }
};
