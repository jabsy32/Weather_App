import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleLocationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!location.trim()) {
      alert("You must specify a valid location.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/api/weather/forecast?location=${location}`,
      );

      if (!response.ok) throw new Error("Could not fetch location");

      const weatherData = await response.json();
      const locationData: WeatherData = weatherData.location;

      localStorage.setItem("lastLocation", JSON.stringify(locationData));

      navigate("/WeatherForecast", { state: weatherData });
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleOnClick(e as never);
    }
  };

  return (
    <div className="flex flex-row w-[60vw] gap-4">
      <Input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationInput}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleOnClick} className="pl-5">
        <span className="hidden sm:inline">Search</span>
        <span className="sm:hidden">
          <img
            src="src/assets/icons/search.png"
            alt="magnifying glass icons"
            width={20}
            height={20}
            className="filter brightness-0 invert"
          />
        </span>
      </Button>
    </div>
  );
};
export default SearchBar;
