const DetailedDayForecast = ({ astro, day }: DetailedDayProps) => {
  if (!day || !astro) return "Unavailable to get forecast details";

  return (
    <div className="flex p-5 items-start">
      <div className="flex flex-col pr-20">
        <div className="flex flex-row items-center">
          <p>Sunrise: {astro.sunrise}</p>
          <img
            src="src/assets/icons/sunriseIcon.jpg"
            alt="Sunrise"
            width={45}
            height={35}
            className="pl-2"
          />
        </div>
        <div className="flex flex-row items-center pt-3">
          <p>Sunset: {astro.sunset}</p>
          <img
            src="src/assets/icons/rising-moonIcon.jpg"
            alt="Sunset"
            width={55}
            height={55}
            className="pl-2"
          />
        </div>
      </div>
      <div className="p-5">
        <p>Chance of rain: {day.daily_chance_of_rain}%</p>
        {day.daily_chance_of_snow > 0 && (
          <p>Chance of snow: {day.daily_chance_of_snow}%</p>
        )}
      </div>
      <div className="p-5">UV Levels: {day.uv}</div>
    </div>
  );
};
export default DetailedDayForecast;
