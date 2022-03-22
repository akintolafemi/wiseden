import { globalVariables } from "./globalVariables";
import { SharedPref } from "../commons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const buildHeader = async (secure?: boolean, auth?: boolean): Promise<HeadersInit> => {
  const header = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    // 'Accept': '*/*',
  };

  if (secure) {
    Object.assign(header, {
      Authorization: `Bearer ${globalVariables.authToken}`,
    });
  }
  if (auth) {
    const auth_token = await SharedPref.getToken()
    // AsyncStorage.getItem('auth').then((auth) => {
      Object.assign(header, {
        Authorization: `Bearer ${auth_token}`,
      });
    // });
  }
  return header;
};

export const makeUrlKeyValuePairs = (json: {[key: string]: any}): string => {
  if (!json || Object.keys(json).length < 1) {
    return '';
  }
  const keys: string[] = Object.keys(json);
  let query = '?';
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    query +=
      encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
  }
  return query.replace(/&$/g, '');
};

export const makeUrlKeyValuePaths = (json: {[key: string]: any}): string => {
  if (!json || Object.keys(json).length < 1) {
    return '';
  }
  const keys: string[] = Object.keys(json);
  let query = '/';
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    query +=
      encodeURIComponent(json[key]) + '/';
  }
  return query.replace(/&$/g, '');
};

type RequestObject = {
  type: 'GET' | 'POST' | 'PUT' | 'DELETE';
  isSecure?: boolean;
  isAuth?: boolean;
  queryParams?: {[key: string]: any};
  pathParams?: {[key: string]: any};
  onResponse?: () => void;
  data?: {[key: string]: any};
  route: string;
};
export async function requestClan({
  onResponse,
  data,
  type = 'GET',
  queryParams,
  pathParams,
  route,
  isSecure = false,
  isAuth = false,
}: RequestObject): Promise<any> {
  let response: Response;
  const BASE_URL = '';

  // Handle get request with params
  let routePlusParams = route;
  if (queryParams) {
    routePlusParams += makeUrlKeyValuePairs(queryParams);
  }

  if (pathParams) {
    routePlusParams += makeUrlKeyValuePaths(pathParams);
  }

  const headers = await buildHeader(isSecure, isAuth);

  response = await fetch(routePlusParams.trim(), {
    method: type,
    headers: headers,
    body: type === 'POST' ? JSON.stringify(data) : null,
  });

  console.log('✅ Making a request', data, type, queryParams, pathParams, route, routePlusParams, isSecure, isAuth);

  var response2 = response.clone();

  console.log(response.status)
  try {
    // TODO: log responses that are not 200
    if (response) {
      const responseJSON = await response.json();
      //console.log(responseJSON)
      return responseJSON;
    }
    return {exception: 'No response returned!'};
  } catch (error: any) {
    const dd = await response2.text();
    let errorMsg = 'An error occurred, please try again later.';
    console.log('✅ An error occurred, please try again later.', error.message, error.text, dd);
    return {
      message: errorMsg,
    };
  }
}
