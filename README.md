# Awesome E-Commerce App

Welcome to the **Awesome E-Commerce App**! This application is built using Ionic React and Redux Toolkit, showcasing various front-end development features including API consumption, state management, routing, and responsive design.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Awesome E-Commerce App is a comprehensive showcase of front-end development skills. It utilizes the following technologies and features:

- **Ionic Framework**: Building the user interface.
- **React with TypeScript**: Component-based architecture.
- **Redux Toolkit**: State management.
- **API Consumption**: Fetching products from the [FakeStore API](https://fakestoreapi.com/docs).
- **Responsive Design**: Utilizing Ionic's responsive grid system.
- **Routing**: Navigating between different pages.
- **Search and Product Filtering**: Dynamic product filtering based on search queries.
- **Cart Functionality**: Adding, removing, and adjusting quantities of items in the cart.
- **Guest Checkout**: Capturing user information for a seamless checkout process.
- **Stylish UI**: Customizable styles using Tailwind CSS.

## Features

### Search and Product Filtering

- A search bar component allows users to search for products.
- Products are dynamically filtered based on the search query.

### Product View

- The product view component displays detailed information about each product.
- Users can click on individual product cards to view detailed information.

### Cart Functionality

- A cart component displays items added to the cart.
- Users can adjust the quantity of items or remove them from the cart.
- The cart icon in the navbar shows the number of items in the cart.

### Guest Checkout

- The guest checkout component captures user information including name, email, and address.
- Redux manages the checkout process, ensuring the cart content is retained during checkout.
- Upon successful checkout, a confirmation message is provided to the user.

### Responsive Design

- The application is responsive and works well on various screen sizes.
- Products are displayed in a grid layout with appropriate columns for different screen sizes.

## Getting Started

To run the Awesome E-Commerce App locally, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Run the development server with `npm start`.

## Folder Structure

The project follows a structured folder organization to keep the codebase organized:

- `src/`
  - `components/`: Reusable React components.
  - `pages/`: Pages that are displayed within the app.
  - `services/`: API service and other utility functions.
  - `redux/`: Redux state management setup.

## Usage

1. Search for products using the search bar.
2. Click on product cards to view detailed information.
3. Add products to the cart and adjust quantities.
4. Navigate to the cart to review your selections and proceed to checkout.
5. During checkout, provide guest user information.
6. Receive a confirmation message upon successful checkout.

## Contributing

Contributions to this project are welcome! If you have any improvements or suggestions, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
