import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import DayForecast from "@/components/DayForecast";
import HourlyForecast from "@/components/HourlyForecast";
import DetailedDayForecast from "@/components/DetailedDayForecast";
import { useLocationContext } from "@/context/LocationContext";
import { backgrounds } from "@/lib/utils";
import { useAlertContext } from "@/context/AlertContext";

const WeatherForecast = () => {
  const location = useLocation();
  const weatherData = location.state;
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
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
    } catch (error) {
      console.log(error);
    }
  }, [setSavedAlerts, setSavedLocation, weatherData]);

  console.log(weatherData);

  useEffect(() => {
    if (index !== 0) setToday(false);
    else setToday(true);
  }, [index]);

  return (
    <div className="flex flex-col h-screen">
      <section>
        <Header />
      </section>
      <section className="flex flex-col pl-5 pr-5 items-center">
        <div
          className="flex w-screen items-center justify-center"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center justify-center w-[70vw]">
            <DayForecast
              forecastData={forecast}
              setIndex={setIndex}
              location={weatherData.location}
              setBackground={setBackground}
            />
          </div>
        </div>
        <div className="flex w-[70vw] justify-center">
          <HourlyForecast
            hours={forecast[index]?.hour}
            time={weatherData.location.localtime}
            today={today}
          />
        </div>
        <div className="flex w-[70vw] justify-center">
          <DetailedDayForecast
            astro={forecast[index]?.astro}
            day={forecast[index]?.day}
          />
        </div>
      </section>
    </div>
  );
};
export default WeatherForecast;
