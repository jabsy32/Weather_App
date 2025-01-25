# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Install Maven
RUN apt-get update && apt-get install -y maven

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container
COPY . .

# Run Maven to build the project
RUN mvn clean install

# Specify the command to run your app using the jar
CMD ["java", "-jar", "target/Weather-app.jar"]
