import { useLocation } from "react-router-dom";
import Header from "@/components/Header.tsx";
import HourMapping from "@/components/HourMapping.tsx";
import LocationInfo from "@/components/LocationInfo.tsx";
import { useState } from "react";
import DetailedForecast from "@/components/DetailedForecast.tsx";

const WeatherForecast = () => {
  const location = useLocation();
  const weatherData = location.state?.weatherData;

  if (!weatherData) {
    return <div>No weather data found</div>;
  }

  const [dayIndex, setDayIndex] = useState(0);
  const forecastdays = weatherData.forecast.forecastday;

  const [background, setBackground] = useState("bg-image-cloud");

  /* Use in hourMapping to show only today's forecast from the current hour  */
  const time = weatherData.location.localtime.slice(-5);
  const currentHour = parseInt(time.split(":")[0], 10);

  const changeDay = () => {
    setDayIndex(dayIndex + 1);
  };

  console.log(background);

  return (
    <section className="flex flex-col bg-blue-50 w-screen h-screen">
      <Header />

      <div className="flex flex-col mx-auto w-full">
        <div
          className="flex justify-center w-full"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] overflow-x-auto">
            <LocationInfo
              name={weatherData.location.name}
              forecastdays={forecastdays}
              dayIndex={dayIndex}
              setDayIndex={setDayIndex}
              currentTemp={weatherData.current.temp_c}
              setBackground={setBackground}
            />
          </div>
        </div>
        <div className="flex items-center justify-center overflow-x-auto bg-white rounded-md mx-auto max-w-[80vw]">
          <div className="flex w-[80vw] lg:w-[70vw] space-x-4 ">
            <HourMapping
              hours={
                dayIndex === 0
                  ? forecastdays[dayIndex].hour.slice(currentHour)
                  : forecastdays[dayIndex].hour
              }
              condition={forecastdays[dayIndex].day.condition.text}
              lastDate={dayIndex === forecastdays.length - 1}
              changeDay={changeDay}
            />
          </div>
        </div>
        <div className="flex justify-center w-[90vw] md:w-[80%] lg:w-[70vw] pt-10">
          <DetailedForecast currentDay={forecastdays[dayIndex]} />
        </div>
      </div>
    </section>
  );
};
export default WeatherForecast;
