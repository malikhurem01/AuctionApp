export const fetchAllProducts = () => {
  const request = new Request('http://localhost:8083/api/v1/get/products', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  return fetch(request);
};

export const fetchProductById = id => {
  const request = new Request(
    'http://localhost:8083/api/v1/get/product/' + id,
    {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  );
  return fetch(request);
};
