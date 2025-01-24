import { backgrounds, formatDate } from "@/lib/utils.ts";
import React, { useState } from "react";
import { clsx } from "clsx";

const DayForecast = ({
  forecastData,
  setIndex,
  location,
  setBackground,
}: ForecastDayProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnClick = (
    index: number,
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
    setIndex(index);
    setSelectedIndex(index);
    const backgroundImage = backgrounds(
      forecastData[index]?.day.condition.text,
    );
    setBackground(backgroundImage);
  };

  return (
    <div className="flex flex-col rounded-lg max-w-full pb-2 pt-2">
      <div className="flex flex-row items-center justify-between text-white">
        <div>
          <h2>{location.name}</h2>
          <p>{location.region}</p>
        </div>
        <div>
          <p>{location.country}</p>
        </div>
      </div>

      <div className="flex flex-row pt-5 max-w-full items-center">
        {forecastData.map((day, index) => (
          <div
            className={clsx(
              "border-2 w-[150px] mx-1 rounded-lg bg-white",
              selectedIndex === index &&
                "text-xl w-[350px] min-h-[200px] bg-gray-300 p-1 flex",
            )}
            key={index}
            onClick={(event) => handleOnClick(index, event)}
          >
            <div className="flex flex-col items-center">
              <div>
                {index === 0 ? (
                  <div>Today</div>
                ) : (
                  <div>{formatDate(day.date)}</div>
                )}
                <div className="p-5 flex flex-col">
                  <div className="font-bold">Max: {day.day.maxtemp_c}°</div>
                  <div className="hidden sm:block">
                    Min: {day.day.mintemp_c}°
                  </div>
                  {selectedIndex === index && (
                    <div className="absolute hidden md:block mx-36  h-[80px] w-[2px] bg-blue-500 "></div>
                  )}
                </div>
              </div>
            </div>
            {/*{Icon}*/}
            <div className="flex flex-col items-center justify-center">
              <img
                src={`https:${day.day.condition.icon}`}
                alt={day.day.condition.text}
                className={clsx(
                  "items-center h-[60px]",
                  selectedIndex === index && "sm:pl-16 h-[90px]",
                )}
              />
              <div className="sm:pl-16">
                {selectedIndex === index && day.day.condition.text}
              </div>
            </div>
          </div>
        ))}
        {/*Alert*/}
      </div>
    </div>
  );
};
export default DayForecast;
