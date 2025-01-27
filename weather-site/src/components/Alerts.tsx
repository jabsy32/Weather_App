import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocationContext } from "@/context/LocationContext";

const Alerts = ({ alerts }: AlertProps) => {
  const [warning, setWarning] = useState(false);
  const { savedLocation } = useLocationContext();
  const alertArray = Array.isArray(alerts) ? alerts : alerts?.alert;

  useEffect(() => {
    console.log("saved alert", alerts);
    if (alertArray && alertArray.length > 0) {
      console.log("alert", alertArray);
      setWarning(true);
    } else setWarning(false);
  }, [alertArray, alerts]);

  console.log(warning);
  return (
    <div
      className={clsx(
        "p-3 text-white gradient-container-background border-4 border-blue-500 rounded-lg",
        warning && "border-black bg-black rounded-lg",
      )}
    >
      {warning ? (
        <div className="flex items-center justify-center w-full gap-4">
          <img
            src="src/assets/icons/warning.png"
            alt="Warning"
            width={35}
            height={35}
          />
          Weather Alert for {savedLocation.name}
          <div>
            <Link to="/AlertInformation" state={alertArray}>
              Find out more
            </Link>
          </div>
        </div>
      ) : (
        <div>No current weather warnings for {savedLocation.name}</div>
      )}
    </div>
  );
};
export default Alerts;
