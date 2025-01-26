import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "@/components/Header.tsx";
import LastSearchedData from "@/components/LastSearchedData.tsx";
import Alerts from "@/components/Alerts";
import WeatherNews from "@/components/WeatherNews";
import { useAlertContext } from "@/context/AlertContext";
const Home = () => {
    const { savedAlerts } = useAlertContext();
    return (_jsxs("div", { className: "flex flex-col min-h-screen w-screen gradient-background", children: [_jsx("section", { children: _jsx(Header, {}) }), _jsx("section", { className: "flex flex-row mx-auto pt-5", children: _jsxs("div", { className: "flex sm:flex-row gap-4 mx-auto w-[80vw] lg:w-[70vw] pt-10 justify-between flex-col-reverse", children: [_jsx("div", { className: "flex border-4  rounded-lg gradient-container-background border-blue-500", children: _jsx(WeatherNews, {}) }), _jsxs("div", { className: "flex flex-col gap-10 rounded-lg", children: [_jsx("div", { children: _jsx(LastSearchedData, {}) }), _jsx("div", { className: "flex mx-auto h-[50px] items-center justify-center w-full pb-5", children: _jsx(Alerts, { alerts: savedAlerts }) })] })] }) })] }));
};
export default Home;
