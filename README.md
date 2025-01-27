# WeatherApp

## Description
This is a weather application that displays current weather conditions, multi-day forecasts, and weather alerts. The project uses a React frontend and a Spring Boot backend to deliver real-time weather data powered by the WeatherAPI.

![Screenshot_27-1-2025_182750_localhost](https://github.com/user-attachments/assets/c0ddee0e-160f-43d0-a717-15c0ef72b49c)

## Features
Current weather conditions by city or location.
Multi-day weather forecast (e.g., 3-day, 7-day forecasts).
Weather alerts and warnings.
City search with validation.
Responsive and user-friendly interface.

## Tech Stack

Frontend:
React
TypeScript
TailwindCSS
React Router

Backend:
Spring Boot (Java)
REST API integration with WeatherAPI
Environment variables for secure configuration

API Used:
WeatherAPI: https://www.weatherapi.com/

### Getting Started

## Prerequisites

#### Make sure you have the following installed:
Java 17+
Maven (for building Spring Boot backend)
Node.js (v16+ recommended for the frontend)
A valid API key from WeatherAPI

#### Installation
1. Clone the Repository
git clone https://github.com/yourusername/Weather_App.git
cd Weather_App

2. Install Dependencies
Frontend:
cd weather-site
npm install

Backend:
cd weather-backend
mvn install

## Setup

3. Add Environment Variables
You must set up environment variables for the backend to securely use the WeatherAPI key.

Backend application.properties file (in src/main/resources):
.env
WEATHER_API_KEY=your_weatherapi_key

🔑 Note: Replace your_weatherapi_key with your actual API key from WeatherAPI.

## Usage
4. Run the Backend

Navigate to the backend folder and start the Spring Boot application:
cd weather-backend
mvn spring-boot:run
By default, the backend runs on http://localhost:8080.

5. Run the Frontend
Navigate to the frontend folder and start the development server:

cd weather-site
npm run dev
By default, the frontend runs on http://localhost:5173.
