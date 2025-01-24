import { useEffect, useState } from "react";
import { formatDate } from "@/lib/actions.ts";

interface hourList {
  condition: string;
  lastDate: boolean;
  hours: {
    temp_c: string;
    time: string;
    wind_dir: string;
    condition: {
      icon: string;
    };
  }[];
  changeDay: () => void;
}

const HourMapping = ({ hours, condition, lastDate, changeDay }: hourList) => {
  const [nextDate, setNextDate] = useState("");

  const getNextDay = (dateString: string) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);

    return date.toISOString().slice(0, 10);
  };

  useEffect(() => {
    const date = hours[0].time.slice(0, 10);
    const nextDay = getNextDay(date);
    setNextDate(formatDate(nextDay));
  }, [hours]);

  return (
    <>
      <div className="border p-4 h-[300px]">
        <span className="font-bold mb-4">{condition}</span>
        <div className="flex flex-row h-[200px] justify-between">
          {hours.map((hour, index) => (
            <div
              key={index}
              className="flex flex-col mb-2 border-l-2 border-r-2 px-2 h-[250px] w-[70px]"
            >
              <span className="pb-12">{hour.time.slice(-5)}</span>
              <span className="pb-12">{hour.temp_c}°C</span>
              <span className="pb-8">
                <img src={`https:${hour.condition.icon}`} alt="weather image" />
              </span>
              <span>{hour.wind_dir}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        {!lastDate && (
          <p>
            show more weather for
            <div className="font-bold cursor-pointer" onClick={changeDay}>
              {nextDate}
            </div>
          </p>
        )}
      </div>
    </>
  );
};
export default HourMapping;
