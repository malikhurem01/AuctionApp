const userRegistrationService = (registrationData) => {
  const request = new Request('http://localhost:8083/api/v1/registration', {
    method: 'POST',
    body: JSON.stringify(registrationData),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  return fetch(request);
};

export default userRegistrationService;
