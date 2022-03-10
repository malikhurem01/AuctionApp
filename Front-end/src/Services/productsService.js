import axios from 'axios';
import axiosConfig from '../Data/axios-config';

export const fetchAllProducts = () => {
  return axios.get(axiosConfig.API_URL + '/get/products');
};

export const fetchProductById = id => {
  return axios.get(axiosConfig.API_URL + '/get/product/' + id);
};
