import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from "react";
const LocationContext = createContext(undefined);
export const LocationProvider = ({ children }) => {
    const [savedLocation, setSavedLocation] = useState({
        country: "UK",
        lat: 0,
        localtime: 0,
        lon: 0,
        name: "London", // Example default name
        region: "",
    });
    useEffect(() => {
        const locationJSON = localStorage.getItem("lastLocation");
        if (locationJSON) {
            try {
                const location = JSON.parse(locationJSON);
                setSavedLocation(location);
            }
            catch (error) {
                console.log(error);
            }
        }
    }, []);
    const updateLocation = (location) => {
        localStorage.setItem("lastLocation", JSON.stringify(location));
        setSavedLocation(location);
    };
    return (_jsx(LocationContext.Provider, { value: { savedLocation, setSavedLocation: updateLocation }, children: children }));
};
// eslint-disable-next-line react-refresh/only-export-components
export const useLocationContext = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("useLocationContext must be used within a LocationProvider");
    }
    return context;
};
