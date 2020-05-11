import axios from 'axios';

interface IAnyObj {
  [key: string]: any;
}

interface IAxios {
  method: 'POST' | 'GET';
  url: string;
  data: any;
  options: IAnyObj;
  requireAuth: boolean;
}

const request = async (params: IAxios) => {
  if (params.requireAuth) {
    params.options.headers['Authorization'] =
      'Barer: ' + localStorage.getItem('token');
  }
  return await axios(params);
};

export { request };
