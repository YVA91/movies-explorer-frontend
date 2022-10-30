const BASE_URL = 'http://localhost:3001';

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