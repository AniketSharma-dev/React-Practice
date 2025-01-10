# React Practice Project

## Overview

This project is built with **React** and **Vite** to practice essential React concepts such as component-based architecture, state management, routing, and API integration. It leverages **Axios** for making API requests, **Tailwind CSS** for responsive styling, and **React Router** for smooth navigation.

### Live Demo

<!-- Check out the live version of the project here: [GitHub Pages](https://aniketsharma-dev.github.io/React-Practice/) -->
Check out the live version of the project here: [GitHub Pages](https://5l5gv5-5173.csb.app/)

## Features

- **Routing**: Utilizes React Router for smooth navigation between different pages (Home, About, Contact, Product).
- **Global State Management**: Implements the Context API to share user data and preferences across components.
- **Responsive Design**: Tailwind CSS ensures that the interface is fully responsive, adapting seamlessly to mobile and desktop views.
- **Interactive Components**:
  - **Card Component**: Dynamically displays user information (name, profession, city, age) with interactive buttons for adding friends and sending messages.
  - **Data Fetching Component**: Retrieves and displays a list of images and author data from the Picsum API in a responsive grid layout.
  - **Footer Component**: Contains company details, legal links, and social media icons, with support for both light and dark themes.
  - **Navbar**: Navigation bar with links to other sections of the website.
  - **Form**: A user login form with fields for username and password.

## Installation

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/AniketSharma-dev/React-Practice.git
   ```
2. Navigate into the project directory:
   ```bash
   cd React-Practice
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:5173` (the default port for Vite).

## Project Structure

```
React-Practice/
├── public/              # Static assets like vite.svg
├── src/
│   ├── assets/          # Image and media assets
│   ├── components/      # Reusable components
│   │   ├── Card/        # Card component for displaying user info
│   │   ├── Data/        # Data handling components (e.g., fetching data from APIs)
│   │   ├── Footer/      # Footer component with company details and social media links
│   │   ├── Form/        # Form component for user login
│   │   ├── Navbar/      # Navbar component with navigation links
│   ├── context/         # Context for managing global state (e.g., user data)
│   ├── pages/           # Page components (Home, About, Contact, Product)
│   ├── App.jsx          # Root application component
│   ├── index.jsx        # Application entry point
│   ├── App.css          # Global styles
│   └── index.css        # Tailwind CSS setup
├── .gitignore           # Git ignore file
├── README.md            # Project documentation (this file)
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Vite**: Build tool and development server for fast React development
- **Axios**: Promise-based HTTP client for making API requests
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **React Router DOM**: Library for handling routing in React applications
- **Remix Icon**: Set of high-quality icons for web applications

## Components

### **Navbar**

- A navigation bar that provides links to the main sections of the website (Home, About, Contact, Product).

### **Card**

- Dynamically renders user data such as name, profession, city, and age.
- Includes interactive buttons for adding friends and sending messages.

### **Data Fetching**

- Fetches a list of random images and author information from the **Picsum API**.
- Displays the fetched data in a responsive grid layout using Tailwind CSS.

### **Footer**

- Contains company details, legal links, and social media icons.
- Supports both **light** and **dark** themes for improved accessibility and user experience.

### **Form**

- A simple form component for user login, including fields for username and password.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push the changes to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- **Aniket Sharma**  
  GitHub: [AniketSharma-dev](https://github.com/AniketSharma-dev)
