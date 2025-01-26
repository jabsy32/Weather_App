import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocationContext } from "@/context/LocationContext";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Alerts = ({ alerts }) => {
    const [warning, setWarning] = useState(false);
    const { savedLocation } = useLocationContext();
    const alertArray = Array.isArray(alerts) ? alerts : alerts?.alert;
    useEffect(() => {
        console.log("saved alert", alerts);
        if (alertArray && alertArray.length > 0) {
            console.log("alert", alertArray);
            setWarning(true);
        }
        else
            setWarning(false);
    }, [alertArray, alerts]);
    console.log(warning);
    return (_jsx("div", { className: clsx("p-3 text-white gradient-container-background border-4 border-blue-500 rounded-lg", warning && "border-black bg-black rounded-lg"), children: warning ? (_jsxs("div", { className: "flex items-center justify-center w-full gap-4", children: [_jsx("img", { src: "src/assets/icons/warning.png", alt: "Warning", width: 35, height: 35 }), "Weather Alert for ", savedLocation.name, _jsx("div", { children: _jsx(Link, { to: "/AlertInformation", state: alertArray, children: "Find out more" }) })] })) : (_jsxs("div", { children: ["No current weather warnings for ", savedLocation.name] })) }));
};
export default Alerts;
