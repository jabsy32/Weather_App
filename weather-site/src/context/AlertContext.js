import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from "react";
const AlertContext = createContext(undefined);
export const AlertProvider = ({ children }) => {
    const [savedAlerts, setSavedAlerts] = useState(null);
    useEffect(() => {
        const AlertJSON = localStorage.getItem("Alert");
        if (AlertJSON) {
            const alerts = JSON.parse(AlertJSON);
            setSavedAlerts(alerts);
        }
        else {
            setSavedAlerts(null);
        }
    }, []);
    const updateAlerts = (alerts) => {
        if (alerts && Array.isArray(alerts)) {
            console.log("updateAlerts called with array:", alerts);
            localStorage.setItem("Alert", JSON.stringify(alerts));
            setSavedAlerts(alerts);
        }
        else {
            localStorage.removeItem("Alert");
            setSavedAlerts(null);
        }
    };
    return (_jsx(AlertContext.Provider, { value: { savedAlerts, setSavedAlerts: updateAlerts }, children: children }));
};
export const useAlertContext = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error("Could not return saved alerts");
    }
    return context;
};
