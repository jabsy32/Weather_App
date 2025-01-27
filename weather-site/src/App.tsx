import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/(pages)/Home";
import WeatherForecast from "@/(pages)/WeatherForecast";
import { LocationProvider } from "@/context/LocationContext";
import { AlertProvider } from "./context/AlertContext";
import AlertInformation from "@/(pages)/AlertInformation";

function App() {
  return (
    <AlertProvider>
      <LocationProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WeatherForecast" element={<WeatherForecast />} />
            <Route path="/AlertInformation" element={<AlertInformation />} />
          </Routes>
        </Router>
      </LocationProvider>
    </AlertProvider>
  );
}

export default App;
