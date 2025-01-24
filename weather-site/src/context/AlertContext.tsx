import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const AlertContext = createContext<AlertContext | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [savedAlerts, setSavedAlerts] = useState<Alert[] | null>(null);

  useEffect(() => {
    const AlertJSON = localStorage.getItem("Alert");

    if (AlertJSON) {
      const alerts: Alert[] = JSON.parse(AlertJSON);
      setSavedAlerts(alerts);
    } else {
      setSavedAlerts(null);
    }
  }, []);

  const updateAlerts = (alerts: Alert[] | null) => {
    if (alerts && Array.isArray(alerts)) {
      console.log("updateAlerts called with array:", alerts);
      localStorage.setItem("Alert", JSON.stringify(alerts));
      setSavedAlerts(alerts);
    } else {
      localStorage.removeItem("Alert");
      setSavedAlerts(null);
    }
  };

  return (
    <AlertContext.Provider
      value={{ savedAlerts, setSavedAlerts: updateAlerts }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("Could not return saved alerts");
  }
  return context;
};
