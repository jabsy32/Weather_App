interface DetailedForecastProps {
  currentDay: {
    astro: {
      sunrise: string;
      sunset: string;
      moon_phase: string;
    };
    day: {
      avghumidity: number;
      daily_chance_of_rain: number;
      daily_chance_of_snow: number;
      precip_mm: number;
      uv: number;
    };
  };
}

const chanceOfSnow = (snow: number) => {
  if (snow > 0) return snow + " Chance of Snow";
};

const DetailedForecast = ({ currentDay }: DetailedForecastProps) => {
  return (
    <section className="flex flex-col max-w-lg max-h-screen h-auto w-auto">
      <div className="p-4 flex flex-col items-center">
        <div className="flex flex-row gap-4">
          <div className="font-bold">Sunrise: {currentDay.astro.sunrise}</div>
          <img
            src={"/icons/sunriseIcon.jpg"}
            alt="sunrise"
            className="w-8 h-8"
          />
          <div>Sunset: {currentDay.astro.sunset}</div>
        </div>
      </div>
      <div className="p-4">
        <div>Chance of rain: {currentDay.day.daily_chance_of_rain}%</div>
      </div>
      <div className="p-4">
        <div>UV levels: {currentDay.day.uv}</div>
      </div>
      <div>{chanceOfSnow(currentDay.day.daily_chance_of_snow)}</div>
    </section>
  );
};
export default DetailedForecast;
