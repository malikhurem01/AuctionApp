export const refreshToken = refresh_token => {
  const request = new Request('http://localhost:8083/api/v1/get/refreshtoken', {
    method: 'POST',
    body: JSON.stringify(refresh_token),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + refresh_token
    })
  });
  return fetch(request);
};

export const setToken = user_jwt => {
  sessionStorage.clear();
  sessionStorage.setItem('user_jwt', JSON.stringify(user_jwt));
};
