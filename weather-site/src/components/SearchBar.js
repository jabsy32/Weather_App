import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    const [location, setLocation] = useState("");
    const navigate = useNavigate();
    const handleLocationInput = (e) => {
        setLocation(e.target.value);
    };
    const handleOnClick = async (e) => {
        e.preventDefault();
        if (!location.trim()) {
            alert("You must specify a valid location.");
            return;
        }
        try {
            const response = await fetch(`http://localhost:8080/api/weather/forecast?location=${location}`);
            if (!response.ok)
                throw new Error("Could not fetch location");
            const weatherData = await response.json();
            const locationData = weatherData.location;
            localStorage.setItem("lastLocation", JSON.stringify(locationData));
            navigate("/WeatherForecast", { state: weatherData });
        }
        catch (error) {
            console.error(error);
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleOnClick(e);
        }
    };
    return (_jsxs("div", { className: "flex flex-row w-[60vw] gap-4", children: [_jsx(Input, { type: "text", placeholder: "Enter location", value: location, onChange: handleLocationInput, onKeyDown: handleKeyDown }), _jsxs(Button, { onClick: handleOnClick, className: "pl-5", children: [_jsx("span", { className: "hidden sm:inline", children: "Search" }), _jsx("span", { className: "sm:hidden", children: _jsx("img", { src: "src/assets/icons/search.png", alt: "magnifying glass icons", width: 20, height: 20, className: "filter brightness-0 invert" }) })] })] }));
};
export default SearchBar;
