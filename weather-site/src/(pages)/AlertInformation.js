import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "@/components/Header";
import { useLocation } from "react-router-dom";
import { formatDateTime } from "@/lib/utils";
const AlertInformation = () => {
    const location = useLocation();
    const alerts = location.state;
    return (_jsxs("div", { className: "flex flex-col w-screen min-h-screen ", children: [_jsx("div", { children: _jsx(Header, {}) }), _jsxs("div", { children: [_jsx("div", { children: _jsx("h1", { className: "p-10", children: "Alerts" }) }), _jsx("div", { children: alerts?.length > 0 ? (_jsx("div", { className: "flex flex-col pl-5 pr-5 items-center text-left", children: alerts?.map((_alert, index) => {
                                const [mainMessage, prepareMessage] = _alert.desc.split("What Should I Do?");
                                return (_jsxs("div", { className: "flex flex-col w-[80vw] pb-14", children: [_jsx("div", { className: "pb-5", children: _alert.headline }), _jsxs("div", { className: "font-bold", children: [_alert.event, ": ", _alert.severity] }), _jsxs("div", { children: [formatDateTime(_alert.effective), " to", " ", formatDateTime(_alert.expires)] }), _jsxs("div", { className: "pb-10 font-bold", children: ["Certainty: ", _alert.certainty] }), _jsx("div", { children: mainMessage }), _jsx("h2", { className: "pt-5 font-bold", children: "What Should I do?" }), _jsx("div", { children: prepareMessage }), _jsx("div", { children: "----------" })] }, index));
                            }) })) : (_jsx("p", { children: "No alert information available" })) })] })] }));
};
export default AlertInformation;
