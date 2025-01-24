import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  const path = useLocation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!location.trim()) {
      throw new Error("Please enter a valid location");
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/weather/forecast?location=${location}`,
      );

      if (!response.ok) throw new Error("Failed to fetch weather");

      const data = await response.json();
      setWeatherData(weatherData);

      navigate("/weatherForecast", { state: { weatherData: data } });
    } catch (error) {
      console.log("Unable to fetch weather data", error);

  };

  return (
    <section className="flex w-full md:w-[80vw] lg:w-[65vw] mx-auto items-center space-x-2 h-[80px] p-5">
      {path.pathname !== "/" && (
        <Link to="/" className="hidden md:block p-4 text-white">
          Home
        </Link>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex w-full  h-full] items-center space-x-2"
      >
        <Input
          type="text"
          value={location}
          placeholder="Enter location"
          onChange={handleChange}
          className="flex-grow h-full px-4 border border-gray-300 rounded-l-lg"
        />
        <Button
          type="submit"
          className="h-full px-6 bg-blue-500 text-white rounded-r-lg"
        >
          Search
        </Button>
      </form>
    </section>
  );
};
export default SearchBar;
