const LocationIco = () => {
  return (
    <svg
      className="zip-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="29.41px"
      height="42.52px"
      viewBox="0 0 29.41 42.52"
    >
      <ellipse
        fill="none"
        stroke="#3986C1"
        strokeWidth="1.2"
        cx="14.71"
        cy="30.16"
        rx="9.55"
        ry="1.95"
      />
      <g className="zip-pin-icon">
        <path
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.3"
          d="M16.22,28.24c-0.49-0.02-1-0.03-1.51-0.03 c-0.5,0-1,0.01-1.48,0.03"
        />
        <path
          fill="none"
          stroke="#3986C1"
          strokeWidth="1.2"
          d="M14.71,10.4c-3.65,0-6.6,2.95-6.6,6.6 c0,6.14,6.6,12.95,6.6,12.95s6.6-6.67,6.6-12.95C21.31,13.36,18.35,10.4,14.71,10.4z M14.71,19.63c-1.44,0-2.62-1.18-2.62-2.62 c0-1.46,1.18-2.62,2.62-2.62s2.62,1.17,2.62,2.62C17.33,18.45,16.15,19.63,14.71,19.63z"
        />
      </g>
    </svg>
  );
};

export default LocationIco;
