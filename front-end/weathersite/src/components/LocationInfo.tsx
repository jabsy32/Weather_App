import clsx from "clsx";
import { formatDate, backgrounds } from "@/lib/actions.ts";
import { useEffect } from "react";

interface LocationInfo {
  name: string;
  forecastdays: Forecastdays[];
  dayIndex: number;
  currentTemp: string;

  setDayIndex(dayIndex: number): void;

  setBackground(background: string): void;
}

interface Forecastdays {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: { icon: string; text: string };
  };
}

const LocationInfo = ({
  name,
  forecastdays,
  dayIndex,
  setDayIndex,
  currentTemp,
  setBackground,
}: LocationInfo) => {
  useEffect(() => {
    const condition = forecastdays[dayIndex]?.day.condition.text || "Default";
    const newBackground = backgrounds(condition.trim());
    setBackground(newBackground);
  }, [dayIndex, forecastdays, setBackground]);

  return (
    <section className="flex flex-col ">
      <div>
        <h1 className="p-5 text-white">{name}</h1>
      </div>
      <div className="flex flex-row p-4 items-end ">
        {forecastdays.map((day, index) => (
          <div
            key={index}
            onClick={() => setDayIndex(index)}
            className={clsx(
              "p-4 border rounded-md w-[160px] h-[115px] bg-gray-100 cursor-pointer",
              index === dayIndex && "!bg-white w-[350px] h-[160px]",
            )}
          >
            <div>{formatDate(day.date)}</div>
            <div className="flex flex-col items-center">
              <p
                className={clsx(
                  "text-sm font-semibold",
                  index === dayIndex && "text-xl",
                )}
              >
                {index === 0
                  ? `Currently: ${currentTemp}`
                  : `Max: ${day.day.maxtemp_c}°C`}
              </p>
              <p className="text-sm text-gray-600 hidden md:block">
                Min: {day.day.mintemp_c}°C
              </p>
              <img
                src={"https:" + day.day.condition.icon}
                alt="icon"
                className={clsx("w-8 h-8", index === dayIndex && "w-14 h-14")}
              />
              <p className="text-sm text-gray-800">
                {index === dayIndex && day.day.condition.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default LocationInfo;
