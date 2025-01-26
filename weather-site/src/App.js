import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/(pages)/Home.tsx";
import WeatherForecast from "@/(pages)/WeatherForecast.tsx";
import { LocationProvider } from "@/context/LocationContext.tsx";
import { AlertProvider } from "./context/AlertContext";
import AlertInformation from "@/(pages)/AlertInformation";
function App() {
    return (_jsx(AlertProvider, { children: _jsx(LocationProvider, { children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/WeatherForecast", element: _jsx(WeatherForecast, {}) }), _jsx(Route, { path: "/AlertInformation", element: _jsx(AlertInformation, {}) })] }) }) }) }));
}
export default App;
