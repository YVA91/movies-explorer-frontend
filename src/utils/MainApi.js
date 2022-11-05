const BASE_URL = 'https://api.yva.diploma.nomoredomains.icu';

const report = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}

export const register = (email, password, name) => {
  console.log({email, password, name,})
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: "include",
    body: JSON.stringify({email, password, name,})
  })
  .then(report)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    credentials: "include",
    body: JSON.stringify({email, password})
  })
    .then(report)
}; 

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json" 
    },
    credentials: "include",
  })
    .then(report)
};

export const patchUserInfo = (email, name) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include",
    body: JSON.stringify({
      email: email,
      name: name
    })
  })
    .then(report)
}

export const getExit = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include",
  })
    .then(report)
}

export const  postSaveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include",
    body: JSON.stringify({
    country: movie.country,
    director: movie.director,
    duration: movie.duration, 
    year: movie.year,
    description: movie.description,
    image: ( `https://api.nomoreparties.co${movie.image.url}`),
    trailerLink: movie.trailerLink,
    thumbnail: ( `https://api.nomoreparties.co${movie.image.url}`),
    movieId: movie.id,
    nameRU: movie.nameRU, 
    nameEN: movie.nameEN,
    })
  })
    .then(report)
}

export const getSaveMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      "Content-Type": "application/json" 
    },
    credentials: "include",
  })
    .then(report)
};

export const  deleteMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: "include",
  })
    .then(report)
}