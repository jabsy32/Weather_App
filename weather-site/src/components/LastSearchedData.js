import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocationContext } from "@/context/LocationContext.tsx";
import { useEffect, useState } from "react";
import { getWeatherForecast } from "@/lib/utils.ts";
import { Link } from "react-router-dom";
import { isValidCity } from "@/lib/actions.ts";
const LastSearchedData = () => {
    const { savedLocation } = useLocationContext();
    const [data, setData] = useState(null);
    const [current, setCurrent] = useState();
    const [loading, setLoading] = useState(true);
    const forecastData = async (savedLocation) => {
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
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        (async () => {
            await forecastData(savedLocation);
        })();
    }, [savedLocation]);
    return (_jsxs("div", { className: "text-white gradient-container-background border-4 border-blue-500 rounded-lg", children: [_jsx("div", { children: _jsx("h2", { className: "font-bold pt-5", children: savedLocation?.name }) }), _jsxs("div", { className: "p-5", children: [_jsxs("p", { children: ["Currently ", current?.temp_c, "\u00B0"] }), _jsxs("p", { children: ["Feels like ", current?.feelslike_c, "\u00B0"] })] }), _jsxs("div", { className: "flex items-center justify-center", children: [_jsxs("p", { children: [_jsx("img", { src: `https:${current?.condition.icon}`, alt: "icon" }), " "] }), _jsx("p", { children: current?.condition.text })] }), _jsx("div", { className: "p-5", children: loading ? (_jsx("p", { children: "Loading..." })) : (_jsx(Link, { to: "/WeatherForecast", state: data, children: "Get the full weather forecast for the next 3 days" })) })] }));
};
export default LastSearchedData;
