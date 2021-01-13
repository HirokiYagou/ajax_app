import axios from 'axios';

axios.interceptors.request.use((config) => {
  if(config.method == 'post' || config.method == 'put' ||
     config.method == 'patch' || config.method == 'delete') {
      const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    config.headers['X-CSRF-Token'] = csrf_token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
