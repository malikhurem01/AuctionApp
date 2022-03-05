const userDataService = (token) => {
  const request = new Request('http://localhost:8083/api/v1/get/user', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    })
  });
  return fetch(request);
};

export default userDataService;
