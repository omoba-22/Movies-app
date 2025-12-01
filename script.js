const API_KEY = "cd8159635aa4cdc0ec9118b7f2d3f680"; 
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const movieContainer = document.getElementById("movie-container");

async function getMovies() {
  const response = await fetch(API_URL);
  const data = await response.json();

  data.results.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>⭐ ${movie.vote_average}</p>
    `;
    movieContainer.appendChild(div);
  });
}

getMovies();
