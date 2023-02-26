import axios from "axios";
import { ACCESS_TOKEN } from "../constants/preferenceKey";
import { ADMIN_LOGIN_PAGE, PUBLIC_PATH } from "../constants/routes";

/**
 * @typedef {Object} APIOptions
 * @property {Object} queryParams
 * @property {Object} pathParams
 * @property {Object} body
 * @property {Object} headers
 */

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    const { status } = err.response;
    if ([401, 403].includes(status)) {
      logOut();
    }
    return Promise.reject(err);
  }
);

const DEFAULT_OPTIONS = {
  queryParams: {},
  pathParams: {},
  body: {},
  header: {},
};

const SOMETHING_WENT_WRONG = "Something whent wrong. Please try again later";

const logOut = () => {
  if (PUBLIC_PATH.includes(window.location.pathname)) return;
  window.location.replace(ADMIN_LOGIN_PAGE);
};

export const formatErrorMessage = (serverErrorMessage) => {
  if (typeof serverErrorMessage === "string") return serverErrorMessage;

  if (typeof serverErrorMessage === "object") {
    const error = serverErrorMessage?.error || {};

    let errorDescription;
    if (Array.isArray(error.message)) {
      errorDescription = error.message[0].message;
    } else {
      errorDescription = error?.message;
    }
    return errorDescription;
  }
  return SOMETHING_WENT_WRONG;
};

export const getErrorMessage = (ApiErrorMessage) => {
  const response = ApiErrorMessage.response;

  if (!response) return SOMETHING_WENT_WRONG;

  const serverError = response.data;

  const serverErrorMessage = formatErrorMessage(serverError);

  if (typeof serverErrorMessage === "object") return SOMETHING_WENT_WRONG;
  return serverErrorMessage || SOMETHING_WENT_WRONG;
};

/**
 * @param {string} url
 * @param {APIOptions} option
 */

//POST API

const postAPI = async (url, option = { DEFAULT_OPTIONS }) => {
  url = _prepareURL(url, option);
  const _headers = _prepareHeaders(option);
  try {
    const response = await axios.post(url, option.body, { headers: _headers });
    const data = await _formattedResponse(response);
    return data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};
const getAPI = async (url, option = { DEFAULT_OPTIONS }) => {
  url = _prepareURL(url, option);
  const _headers = _prepareHeaders(option);
  let params = {};
  params.headers = _headers;
  if (option.responseType) {
    params.responseType = option.responseType;
  }
  try {
    const response = await axios.get(url, params);
    const data = await _formattedResponse(response);
    return data;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

//prepare URL

const _prepareURL = (url, option = DEFAULT_OPTIONS) => {
  const { pathParams = {}, queryParams = {} } = option;
  Object.entries(pathParams).forEach(([c, v]) => {
    url = url.replaceAll(`:${c}`, v);
  });

  const params = new URLSearchParams(queryParams);
  const qb = params.toString();

  url = url + `?${qb}`;
  return url;
};

//PREPARE HEADER

const _prepareHeaders = (option = { DEFAULT_OPTIONS }) => {
  return {
    Authorization: `${localStorage.getItem(ACCESS_TOKEN)}`,
    ...(option?.headers || {}),
  };
};

//FORMAT ERROR

const _formattedResponse = async (response) => {
  if (response.data.data) {
    return response.data.data;
  }
  return response.data;
};

const API = {
  post: postAPI,
  get: getAPI,
};

export default API;
