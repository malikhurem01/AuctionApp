const Logout = () => {
  sessionStorage.clear();
  window.location.replace('/login');
};

export default Logout;
