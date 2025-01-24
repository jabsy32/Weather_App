import { getCities } from "countries-cities";

export const isValidCity = (location: UserLocation) => {
  if (!location || location.name === "") {
    return {
      valid: false,
      location: "London",
      Message: "City not found. Backup location used",
    };
  }

  if (location.country == "United States of America")
    location.country = "United States";

  const place = location.name.trim().toLowerCase();

  const cities = getCities(location.country);
  const isMatch = cities.find((city) => city.toLowerCase() === place);

  return isMatch
    ? {
        valid: true,
        location: isMatch,
      }
    : {
        valid: false,
        location: "London",
        Message: "City not found. Backup location used",
      };
};
