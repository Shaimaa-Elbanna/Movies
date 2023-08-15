# MovieDB React Website

This is a React-based website that utilizes the MovieDB API to showcase movies. The project includes sections for trending movies, movie details, similar movies, and genres. It leverages the power of React.js, Redux, Sass, and Bootstrap to enhance the user interface and provide a seamless movie browsing experience.

## Installation

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:
npm install

4. Start the development server with the following command:
npm start

This will start the application and open it in your default browser.

## Features

- **Trending Movies:** The website displays a list of trending movies based on the data retrieved from the MovieDB API.
- **Movie Details:** Clicking on a movie card or link takes the user to the movie's details page, providing comprehensive information about the selected movie.
- **Similar Movies:** The details page also presents a list of similar movies, allowing users to discover related content.
- **Genres:** Users can explore movies by genre, with dedicated sections showcasing popular movies in each genre.

## Dependencies

The project relies on the following libraries and APIs:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - A predictable state container for managing application state.
- [Sass](https://sass-lang.com/) - A CSS preprocessor that provides additional features and improves the maintainability of stylesheets.
- [Bootstrap](https://getbootstrap.com/) - A popular CSS framework for building responsive web pages.
- [MovieDB API](https://www.themoviedb.org/documentation/api) - An API that provides access to a vast collection of movie data and metadata.

## Folder Structure

The project structure is organized as follows:
├── src
│ ├── components
│ │ ├── TrendingMovies.js
│ │ ├── MovieDetails.js
│ │ ├── SimilarMovies.js
│ │ └── Genres.js
│ ├── pages
│ │ ├── Home.js
│ │ ├── MovieDetailsPage.js
│ │ └── GenrePage.js
│ ├── redux
│ │ ├── actions
│ │ ├── reducers
│ │ └── store.js
│ ├── api.js
│ ├── App.js
│ ├── index.js
│ └── index.scss
└── README.md


- The `components` folder contains reusable components used throughout the application, such as `TrendingMovies`, `MovieDetails`, `SimilarMovies`, and `Genres`.
- The `pages` folder includes individual pages of the website, such as `Home`, `MovieDetailsPage`, and `GenrePage`.
- The `redux` folder contains the Redux-related files, including actions, reducers, and the store configuration.
- The `api.js` file handles the interaction with the MovieDB API.
- The `App.js` file acts as the entry point for the application, defining the routing and rendering of different pages.
- The `index.js` file renders the root component of the application.
- The `index.scss` file contains custom styles written in Sass.

Feel free to explore


