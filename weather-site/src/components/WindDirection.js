import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const WindIcon = ({ direction, windSpeed }) => {
    // Map of wind direction to degrees
    const directionMap = {
        N: 0,
        NE: 45,
        E: 90,
        SE: 135,
        S: 180,
        SW: 225,
        W: 270,
        NW: 315,
    };
    const rotation = directionMap[direction] || 0; // Default to 0 if direction not found
    return (_jsxs("svg", { width: "70", height: "70", viewBox: "0 0 70 70", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("circle", { cx: "35", cy: "35", r: "20", stroke: "black", strokeWidth: "2", fill: "none" }), _jsx("g", { transform: `rotate(${rotation}, 35, 35)`, children: _jsx("polygon", { points: "35,5 30,15 40,15", fill: "black" // arrowhead is a small triangle
                 }) }), _jsx("text", { x: "35", y: "40", fontSize: "12", textAnchor: "middle", fill: "black", fontWeight: "bold", children: windSpeed })] }));
};
export default WindIcon;
