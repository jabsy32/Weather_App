import { formatTimeUpdate } from "@/lib/utils.ts";
import { clsx } from "clsx";
import WindDirection from "@/components/WindDirection.tsx";

const HourlyForecast = ({ hours, time, today }: HourlyDataProps) => {
  if (!hours || !Array.isArray(hours)) {
    return <div>No forecast data available</div>;
  }

  const timeIndex = Number(time.slice(-5, -3));

  return (
    <div className="flex flex-col pt-5 max-w-full">
      <div className="flex flex-row overflow-auto">
        {hours.map((day, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "flex flex-col w-[100px] h-[370px] flex-shrink-0 gap-2 border border-gray-200 rounded-lg items-center justify-between",
                today && time.slice(-5) > day.time.slice(-5) && "hidden",
              )}
            >
              <div>
                <div className="pb-12">{day.time.slice(-5)}</div>
                <div>
                  <div>{day.temp_c}°</div>
                </div>
                <div className="pt-5 pb-5 flex items-center justify-center ">
                  <img src={`https:${day.condition.icon}`} alt="icon" />
                </div>
                <div className="h-[70px] hidden md:block pb-2 p-2">
                  {day.condition.text}
                </div>
                <div className="absolute pl-3 y-2">
                  {(index === 0 || index === timeIndex + 1) && (
                    <p className="text-sm">Wind direction and speed</p>
                  )}
                </div>
                <div className="flex flex-row items-center justify-center pt-5 pb-2">
                  <WindDirection
                    direction={day.wind_dir}
                    windSpeed={day.wind_mph}
                  />
                  <p className="text-sm mr-2">mph</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-end justify-end p-2">
        <p className="text-sm">Last updated {formatTimeUpdate(time)}</p>
      </div>
    </div>
  );
};
export default HourlyForecast;
