import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatTimeUpdate } from "@/lib/utils.ts";
import { clsx } from "clsx";
import WindDirection from "@/components/WindDirection.tsx";
const HourlyForecast = ({ hours, time, today }) => {
    if (!hours || !Array.isArray(hours)) {
        return _jsx("div", { children: "No forecast data available" });
    }
    const timeIndex = Number(time.slice(-5, -3));
    return (_jsxs("div", { className: "flex flex-col pt-5 max-w-full", children: [_jsx("div", { className: "flex flex-row overflow-auto", children: hours.map((day, index) => {
                    return (_jsx("div", { className: clsx("flex flex-col w-[100px] h-[370px] flex-shrink-0 gap-2 border border-gray-200 rounded-lg items-center justify-between", today && time.slice(-5) > day.time.slice(-5) && "hidden"), children: _jsxs("div", { children: [_jsx("div", { className: "pb-12", children: day.time.slice(-5) }), _jsx("div", { children: _jsxs("div", { children: [day.temp_c, "\u00B0"] }) }), _jsx("div", { className: "pt-5 pb-5 flex items-center justify-center ", children: _jsx("img", { src: `https:${day.condition.icon}`, alt: "icon" }) }), _jsx("div", { className: "h-[70px] hidden md:block pb-2 p-2", children: day.condition.text }), _jsx("div", { className: "absolute pl-3 y-2", children: (index === 0 || index === timeIndex + 1) && (_jsx("p", { className: "text-sm", children: "Wind direction and speed" })) }), _jsxs("div", { className: "flex flex-row items-center justify-center pt-5 pb-2", children: [_jsx(WindDirection, { direction: day.wind_dir, windSpeed: day.wind_mph }), _jsx("p", { className: "text-sm mr-2", children: "mph" })] })] }) }, index));
                }) }), _jsx("div", { className: "flex items-end justify-end p-2", children: _jsxs("p", { className: "text-sm", children: ["Last updated ", formatTimeUpdate(time)] }) })] }));
};
export default HourlyForecast;
