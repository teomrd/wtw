import { stringify } from "query-string";
import config from "../../config";

class CustomError extends Error {
  constructor(message, status, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.status = status;
    this.message = message;
    this.date = new Date();
  }
}

export const parseEndpoint = (endpoint, params) => {
  const url =
    endpoint.indexOf("http") === 0 ? endpoint : `${config.apiUrl}${endpoint}`;
  const querystring = params ? `?${stringify(params)}` : "";
  return `${url}${querystring}`;
};

export const checkResponse = async response => {
  let body;
  if (response.ok) {
    try {
      body = await response.json();
    } catch (e) {
      return Promise.reject({
        cod: response.status,
        message: "Unexpected response format!!"
      });
    }
    return Promise.resolve(body);
  }

  /*** Log the error, potentially send to a Logging Service ***/
  const { statusText, status } = response;
  const error = new CustomError(statusText, status);
  error.response = response;
  console.log(error);
  /*** Log the error, potentially send to a Logging Service ***/

  try {
    body = await response.json();
  } catch (e) {
    body = {
      cod: response.status,
      message: response.statusText
    };
  }
  return Promise.reject(body);
};

const defaultHeaders = {
  mode: "cors"
};

const api = {
  get: (endpoint, params, headers = defaultHeaders) => {
    return fetch(parseEndpoint(endpoint, params), {
      method: "GET",
      ...defaultHeaders
    }).then(checkResponse);
  }
};

export default api;
