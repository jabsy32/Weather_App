import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const DetailedDayForecast = ({ astro, day }) => {
    if (!day || !astro)
        return "Unavailable to get forecast details";
    return (_jsxs("div", { className: "flex p-5 items-start", children: [_jsxs("div", { className: "flex flex-col pr-20", children: [_jsxs("div", { className: "flex flex-row items-center", children: [_jsxs("p", { children: ["Sunrise: ", astro.sunrise] }), _jsx("img", { src: "src/assets/icons/sunriseIcon.jpg", alt: "Sunrise", width: 45, height: 35, className: "pl-2" })] }), _jsxs("div", { className: "flex flex-row items-center pt-3", children: [_jsxs("p", { children: ["Sunset: ", astro.sunset] }), _jsx("img", { src: "src/assets/icons/rising-moonIcon.jpg", alt: "Sunset", width: 55, height: 55, className: "pl-2" })] })] }), _jsxs("div", { className: "p-5", children: [_jsxs("p", { children: ["Chance of rain: ", day.daily_chance_of_rain, "%"] }), day.daily_chance_of_snow > 0 && (_jsxs("p", { children: ["Chance of snow: ", day.daily_chance_of_snow, "%"] }))] }), _jsxs("div", { className: "p-5", children: ["UV Levels: ", day.uv] })] }));
};
export default DetailedDayForecast;
