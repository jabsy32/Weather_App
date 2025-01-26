export const fetchNewStories = async () => {
    try {
        const response = await fetch("http://localhost:8080/api/weather/weather-stories");
        if (!response.ok)
            throw new Error("Could not retrieve weather stories");
        return await response.json();
    }
    catch (error) {
        console.error(error);
    }
};
