import axios from 'axios';

export const userLogin = async data => {
  return axios.post('http://localhost:8083/api/v1/authenticate', {
    userName: data.userName,
    password: data.password
  });
};

export const userRegistrationService = registrationData => {
  const request = new Request('http://localhost:8083/api/v1/registration', {
    method: 'POST',
    body: JSON.stringify(registrationData),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  return fetch(request);
};

export const userDataService = token => {
  const request = new Request('http://localhost:8083/api/v1/get/user', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    })
  });
  return fetch(request);
};
