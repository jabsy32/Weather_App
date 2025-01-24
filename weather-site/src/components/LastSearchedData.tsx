import { useLocationContext } from "@/context/LocationContext.tsx";
import { useEffect, useState } from "react";
import { getWeatherForecast } from "@/lib/utils.ts";
import { Link } from "react-router-dom";
import { isValidCity } from "@/lib/actions.ts";

const LastSearchedData = () => {
  const { savedLocation } = useLocationContext();
  const [data, setData] = useState(null);
  const [current, setCurrent] = useState<Current>();
  const [loading, setLoading] = useState(true);

  const forecastData = async (savedLocation: UserLocation) => {
    setLoading(true);
    const location = isValidCity(savedLocation);
    if (location.location !== savedLocation.name) {
      savedLocation.name = location.location;
    }

    try {
      const response = await getWeatherForecast(location.location);
      const currentData = response?.current;
      if (currentData) {
        console.log(currentData);
        setData(response);
        setCurrent(currentData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await forecastData(savedLocation);
    })();
  }, [savedLocation]);

  return (
    <div className="text-white gradient-container-background border-4 border-blue-500 rounded-lg">
      <div>
        <h2 className="font-bold pt-5">{savedLocation?.name}</h2>
      </div>
      <div className="p-5">
        <p>Currently {current?.temp_c}°</p>
        <p>Feels like {current?.feelslike_c}°</p>
      </div>
      <div className="flex items-center justify-center">
        <p>{<img src={`https:${current?.condition.icon}`} alt="icon" />} </p>
        <p>{current?.condition.text}</p>
      </div>
      <div className="p-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Link to={"/WeatherForecast"} state={data}>
            Get the full weather forecast for the next 3 days
          </Link>
        )}
      </div>
    </div>
  );
};
export default LastSearchedData;
