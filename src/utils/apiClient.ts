import axios from 'axios';

interface IAnyObj {
  [key: string]: any;
}

interface IClient {
  url: string;
  options?: IAnyObj;
  requireAuth?: boolean;
  data?: any;
}

const apiURL = process.env.REACT_APP_API_URL || '';

const defaultOptions = { headers: {} };

const getClient = (baseURL: string = apiURL) => {
  const options = {
    baseURL,
  };
  return axios.create(options);
};

export default {
  get: ({ url, options = defaultOptions, requireAuth = true }: IClient) => {
    if (requireAuth) {
      const token = localStorage.getItem('token');
      options.headers['authorization'] = token;
    }
    return getClient().get(url, options);
  },
  post: ({
    url,
    data,
    options = defaultOptions,
    requireAuth = true,
  }: IClient) => {
    if (requireAuth) {
      const token = localStorage.getItem('token') || '';
      options.headers['authorization'] = `Bearer ${token}`;
    }
    return getClient().post(url, data, options);
  },
};
