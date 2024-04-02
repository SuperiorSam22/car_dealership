# Four Wheels Car Dealership Web Application

Four Wheels is a web application designed to facilitate car auctions and provide detailed specifications of cars available for bidding. It is built with HTML, CSS, and JavaScript for the frontend, and Spring Boot Java for the backend.

## Features

- **Car Auctions**: Users can view multiple cars available for auction.
- **Bid Placement**: Users can place their bids on the cars they are interested in.
- **Car Specifications**: Detailed specifications of each car are displayed.
- **Auction Timer**: A countdown timer for auction.
- **Winner Selection**: After the auction timer expires, the car is sold to the highest bidder.
- **Receipt Generation**: A receipt is generated in the user's name for the purchased car.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

- **Backend**:
  - Spring Boot Java

## Installation

1. Clone this repository.
2. Navigate to the backend directory (demo) and run `mvn spring-boot:run` to start the Spring Boot server.
3. Navigate to the frontend directory and open `login.html` in your preferred web browser.
4. Use MySql workbench to feed the car data for displaying it. Change application.properties file in resouces of springboot.

## Usage

- Upon opening the application, users will see a list of cars available for auction.
- Users can click on a car to view its detailed specifications.
- To place a bid, users need to enter their bid amount and submit.
- The auction timer will countdown, and once it expires, the car will be sold to the highest bidder.
- A receipt will be generated in the user's name for the purchased car.
