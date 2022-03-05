import axios from 'axios';

const userLogin = async (data) => {
  return axios.post('http://localhost:8083/api/v1/authenticate', {
    userName: data.userName,
    password: data.password
  });
};

export default userLogin;
