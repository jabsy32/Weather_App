
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import WeatherForecast from "@/pages/WeatherForecast.tsx";

function App() {

  return (
    <Router>
        <Routes >
            <Route path="/" element={<Home />}/>
            <Route path="/weatherForecast" element={<WeatherForecast />} />
        </Routes>
    </Router>
  )
}

export default App
