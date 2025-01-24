//format date

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options = { weekday: "short" };
  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(date);
  const dayNumber = date.getDate();
  const suffix =
    dayNumber % 10 === 1 && dayNumber !== 11
      ? "st"
      : dayNumber % 10 === 2 && dayNumber !== 12
        ? "nd"
        : dayNumber % 10 === 3 && dayNumber !== 13
          ? "rd"
          : "th";

  return `${dayOfWeek} ${dayNumber}${suffix}`;
};

export const backgrounds = (condition: string): string => {
  switch (condition) {
    case "Sunny":
    case "Clear":
      return "/images/sunny.jpg";
    case "Partly cloudy":
      return "/images/blue-sky-clouds.jpg";
    case "Cloudy":
      return "/images/cloudy.jpg";
    case "Overcast":
      return "/images/overcast.webp";
    case "Mist":
      return "/images/mist.jpg";
    case "Patchy rain nearby":
      return "/images/rainLight.jpg";
    case "Patchy snow possible":
      return ""; // Add your image path for Patchy snow possible
    case "Patchy sleet possible":
      return ""; // Add your image path for Patchy sleet possible
    case "Patchy freezing drizzle possible":
      return ""; // Add your image path for Patchy freezing drizzle possible
    case "Thundery outbreaks possible":
      return ""; // Add your image path for Thundery outbreaks possible
    case "Blowing snow":
      return ""; // Add your image path for Blowing snow
    case "Blizzard":
      return ""; // Add your image path for Blizzard
    case "Fog":
      return ""; // Add your image path for Fog
    case "Freezing fog":
      return ""; // Add your image path for Freezing fog
    case "Patchy light drizzle":
      return ""; // Add your image path for Patchy light drizzle
    case "Light drizzle":
      return ""; // Add your image path for Light drizzle
    case "Freezing drizzle":
      return ""; // Add your image path for Freezing drizzle
    case "Heavy freezing drizzle":
      return ""; // Add your image path for Heavy freezing drizzle
    case "Patchy light rain":
      return ""; // Add your image path for Patchy light rain
    case "Light rain":
      return ""; // Add your image path for Light rain
    case "Moderate rain at times":
      return ""; // Add your image path for Moderate rain at times
    case "Moderate rain":
      return ""; // Add your image path for Moderate rain
    case "Heavy rain at times":
      return ""; // Add your image path for Heavy rain at times
    case "Heavy rain":
      return ""; // Add your image path for Heavy rain
    case "Light freezing rain":
      return ""; // Add your image path for Light freezing rain
    case "Moderate or heavy freezing rain":
      return ""; // Add your image path for Moderate or heavy freezing rain
    case "Light sleet":
      return ""; // Add your image path for Light sleet
    case "Moderate or heavy sleet":
      return ""; // Add your image path for Moderate or heavy sleet
    case "Patchy light snow":
      return ""; // Add your image path for Patchy light snow
    case "Light snow":
      return ""; // Add your image path for Light snow
    case "Patchy moderate snow":
      return ""; // Add your image path for Patchy moderate snow
    case "Moderate snow":
      return ""; // Add your image path for Moderate snow
    case "Patchy heavy snow":
      return ""; // Add your image path for Patchy heavy snow
    case "Heavy snow":
      return ""; // Add your image path for Heavy snow
    case "Ice pellets":
      return ""; // Add your image path for Ice pellets
    case "Light rain shower":
      return ""; // Add your image path for Light rain shower
    case "Moderate or heavy rain shower":
      return ""; // Add your image path for Moderate or heavy rain shower
    case "Torrential rain shower":
      return ""; // Add your image path for Torrential rain shower
    case "Light sleet showers":
      return ""; // Add your image path for Light sleet showers
    case "Moderate or heavy sleet showers":
      return ""; // Add your image path for Moderate or heavy sleet showers
    case "Light snow showers":
      return ""; // Add your image path for Light snow showers
    case "Moderate or heavy snow showers":
      return ""; // Add your image path for Moderate or heavy snow showers
    case "Light showers of ice pellets":
      return ""; // Add your image path for Light showers of ice pellets
    case "Moderate or heavy showers of ice pellets":
      return ""; // Add your image path for Moderate or heavy showers of ice pellets
    case "Patchy light rain with thunder":
      return ""; // Add your image path for Patchy light rain with thunder
    case "Moderate or heavy rain with thunder":
      return ""; // Add your image path for Moderate or heavy rain with thunder
    case "Patchy light snow with thunder":
      return ""; // Add your image path for Patchy light snow with thunder
    case "Moderate or heavy snow with thunder":
      return ""; // Add your image path for Moderate or heavy snow with thunder
    default:
      return ""; // Add a default image path
  }
};
