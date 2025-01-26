import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { backgrounds, formatDate } from "@/lib/utils.ts";
import { useState } from "react";
import { clsx } from "clsx";
const DayForecast = ({ forecastData, setIndex, location, setBackground, }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleOnClick = (index, event) => {
        event.stopPropagation();
        setIndex(index);
        setSelectedIndex(index);
        const backgroundImage = backgrounds(forecastData[index]?.day.condition.text);
        setBackground(backgroundImage);
    };
    return (_jsxs("div", { className: "flex flex-col rounded-lg max-w-full pb-2 pt-2", children: [_jsxs("div", { className: "flex flex-row items-center justify-between text-white", children: [_jsxs("div", { children: [_jsx("h2", { children: location.name }), _jsx("p", { children: location.region })] }), _jsx("div", { children: _jsx("p", { children: location.country }) })] }), _jsx("div", { className: "flex flex-row pt-5 max-w-full items-center", children: forecastData.map((day, index) => (_jsxs("div", { className: clsx("border-2 w-[150px] mx-1 rounded-lg bg-white", selectedIndex === index &&
                        "text-xl w-[350px] min-h-[200px] bg-gray-300 p-1 flex"), onClick: (event) => handleOnClick(index, event), children: [_jsx("div", { className: "flex flex-col items-center", children: _jsxs("div", { children: [index === 0 ? (_jsx("div", { children: "Today" })) : (_jsx("div", { children: formatDate(day.date) })), _jsxs("div", { className: "p-5 flex flex-col", children: [_jsxs("div", { className: "font-bold", children: ["Max: ", day.day.maxtemp_c, "\u00B0"] }), _jsxs("div", { className: "hidden sm:block", children: ["Min: ", day.day.mintemp_c, "\u00B0"] }), selectedIndex === index && (_jsx("div", { className: "absolute hidden md:block mx-36  h-[80px] w-[2px] bg-blue-500 " }))] })] }) }), _jsxs("div", { className: "flex flex-col items-center justify-center", children: [_jsx("img", { src: `https:${day.day.condition.icon}`, alt: day.day.condition.text, className: clsx("items-center h-[60px]", selectedIndex === index && "sm:pl-16 h-[90px]") }), _jsx("div", { className: "sm:pl-16", children: selectedIndex === index && day.day.condition.text })] })] }, index))) })] }));
};
export default DayForecast;
