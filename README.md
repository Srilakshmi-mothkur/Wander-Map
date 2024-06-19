# Wander Map

Wander Map is an advanced travel companion application built using React and Google Maps API. It facilitates exploring nearby restaurants, hotels, and attractions, leveraging geolocation, place searching, and data fetching from RapidAPI.

## Features

- **Geolocation**: Automatically fetches the user's current location.
- **Google Maps Integration**: Displays an interactive map with markers for places.
- **Place Searching**: Allows users to search for specific places using the Google Maps Autocomplete feature.
- **Data Fetching**: Retrieves detailed information about restaurants, hotels, and attractions using RapidAPI.
- **Filtering**: Filters places based on type and rating.
- **Responsive Design**: Works well on both desktop and mobile devices.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Material-UI**: UI components for React to create a beautiful and responsive design.
- **Google Maps API**: Provides geolocation, map, and place services.
- **RapidAPI**: Fetches detailed data about places.
- **Axios**: HTTP client for making API requests.

  ![WhatsApp Image 2024-06-19 at 22 31 00_fa0a3912](https://github.com/Srilakshmi-mothkur/wander-map/assets/110167522/e39c5729-d686-45c1-9198-819b196935aa)
  ![WhatsApp Image 2024-06-19 at 22 32 10_8a74776c](https://github.com/Srilakshmi-mothkur/wander-map/assets/110167522/7bf400b7-4311-4394-88ae-d9c281aef18c)
  

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Srilakshmi-mothkur/wander-map.git
   cd wander-map
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root of your project and add your Google Maps API key and RapidAPI key:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   REACT_APP_RAPIDAPI_KEY=your-rapidapi-key
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## API Reference

- **Google Maps API**: Provides map rendering and place search capabilities.
- **RapidAPI**: Used to fetch place details like restaurants, hotels, and attractions.

## Contribution

Feel free to fork this project, create a new branch, and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the GNU Public License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Material-UI](https://material-ui.com/)
- [Google Maps API](https://developers.google.com/maps)
- [RapidAPI](https://rapidapi.com/)

