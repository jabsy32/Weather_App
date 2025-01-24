import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const LocationContext = createContext<LocationContext | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [savedLocation, setSavedLocation] = useState<UserLocation>({
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
        const location: UserLocation = JSON.parse(locationJSON);
        setSavedLocation(location);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const updateLocation = (location: UserLocation) => {
    localStorage.setItem("lastLocation", JSON.stringify(location));
    setSavedLocation(location);
  };

  return (
    <LocationContext.Provider
      value={{ savedLocation, setSavedLocation: updateLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error(
      "useLocationContext must be used within a LocationProvider",
    );
  }
  return context;
};
