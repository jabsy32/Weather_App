import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SearchBar from "@/components/SearchBar.tsx";
import { useLocation, Link } from "react-router-dom";
import { clsx } from "clsx";
const Header = () => {
    const path = useLocation();
    return (_jsxs("div", { className: clsx("flex flex-col items-center justify-center w-screen pb-3", path.pathname !== "/" && "gradient-background"), children: [_jsx("div", { className: "p-5", children: _jsx("h1", { className: "text-white", children: "Weather Forecast" }) }), _jsxs("div", { className: " flex items-center justify-center", children: [_jsx("div", { className: "p-5 ", children: path.pathname !== "/" && _jsx(Link, { to: "/", children: "Home" }) }), _jsx(SearchBar, {})] })] }));
};
export default Header;
