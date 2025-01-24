const WindIcon = ({ direction, windSpeed }: WindIconProps) => {
  // Map of wind direction to degrees
  const directionMap: Record<string, number> = {
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

  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle */}
      <circle
        cx="35"
        cy="35"
        r="20"
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
      {/* Arrow (just the arrowhead outside the circle) */}
      <g transform={`rotate(${rotation}, 35, 35)`}>
        <polygon
          points="35,5 30,15 40,15"
          fill="black" // arrowhead is a small triangle
        />
      </g>
      {/* Wind speed inside circle */}
      <text
        x="35"
        y="40"
        fontSize="12"
        textAnchor="middle"
        fill="black"
        fontWeight="bold"
      >
        {windSpeed}
      </text>
    </svg>
  );
};

export default WindIcon;
