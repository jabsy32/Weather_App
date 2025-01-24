declare global {
  interface Condition {
    text: string;
    icon: string;
  }

  interface HourData {
    chanceOfRain: number;
    chance_of_snow: number;
    cloud: number;
    condition: Condition;
    feelslike_c: number;
    humidity: number;
    isDay: number;
    precip_mm: number;
    snow_cm: number;
    temp_c: number;
    time: string;
    will_it_rain: number;
    wind_dir: string;
    wind_mph: number;
    windchill_c: number;
  }

  interface HourlyDataProps {
    hours: HourData[];
    time: string;
    today: boolean;
  }

  interface Astro {
    sunrise: string;
    sunset: string;
    moon_phase: string;
  }

  interface ForecastDay {
    date: string;
    hour: HourData[];
    astro: Astro;
    day: Day;
    date_epoch: number;
  }

  interface Day {
    avgtemp_c: number;
    condition: Condition;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    maxtemp_c: number;
    maxwind_mph: number;
    mintemp_c: number;
    precip_mm: number;
    uv: number;
  }

  interface ForecastDayProps {
    forecastData: ForecastDay[];
    setIndex: (index: number) => void;
    location: UserLocation;
    setBackground: (background: string) => void;
  }

  interface DetailedDayProps {
    astro: Astro;
    day: Day;
  }

  interface Current {
    condition: Condition;
    feelslike_c: number;
    humidity: number;
    precip_mm: number;
    temp_c: number;
    wind_mph: number;
  }
  type WindIconProps = {
    direction: string; // e.g., "N", "E", "S", "W", etc.
    windSpeed: number; // Wind speed to display inside the circle
  };

  interface UserLocation {
    country: string;
    lat: number;
    localtime: number;
    lon: number;
    name: string;
    region: string;
  }
  interface LocationContext {
    savedLocation: UserLocation;
    setSavedLocation: (location: UserLocation) => void;
  }

  interface AlertContext {
    savedAlerts: Alert[] | null;
    setSavedAlerts: (alerts: Alert[] | null) => void;
  }

  interface WeatherData {
    current: Current;
    forecast: ForecastDay;
    location: Location;
    alerts: Alert;
  }

  interface Alert {
    headline: string;
    severity: string;
    urgency: string;
    certainty: string;
    event: string;
    note: string;
    effective: string;
    expires: string;
    desc: string;
    instruction: string;
  }

  interface AlertProps {
    alerts:
      | {
          alert: Alert[];
        }
      | Alert[]
      | null
      | undefined;
  }

  interface NewsArticle {
    title: string;
    link: string;
    imgUrl: string;
  }

  interface News {
    articles: NewsArticle[];
  }

  interface NewsProps {
    article: NewsArticle;
  }
}

export {};
