import axios from 'axios';

var baseUrl = 'http://23.254.228.118:8080/API/';

var client_host = window.location.hostname;

var config = {
  baseURL: baseUrl + '/api',
};

var Client = axios.create(config);

export default Client;
