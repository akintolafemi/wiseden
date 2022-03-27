import {NetworkResponse, CategoriesResponse} from '../interfaces/global';
import {LoginUsernameRequest, LoginPasswordRequest, ResetPasswordRequest} from '../interfaces/login';
import { VerifyMobileRequest, VerifyEmailRequest, VerifyCodeParams, VerifyResponse } from '../interfaces/global';
import { CreateAccountRequest, CreateUserResponse, ProfileResponse, EditUserRequest } from '../interfaces/profile';

import {requestClan} from './requests';

const BASE_URL = 'http://68.169.57.98/wisedenapi/api/';
const URL_LOGIN_USERNAME = BASE_URL + 'users/login/attempt-username-login';
const URL_LOGIN_PASSWORD = BASE_URL + 'users/login/attempt-login';
const URL_REGISTER = BASE_URL + 'users/save';
const URL_LOGOUT = BASE_URL + 'users/login/attempt-logout';

function loginUsername(data: LoginUsernameRequest): Promise<any> {
  return requestClan({
    data,
    type: 'POST',
    route: URL_LOGIN_USERNAME,
    isSecure: true,
  });
}

function loginPassword(data: LoginPasswordRequest): Promise<any> {
  return requestClan({
    data,
    type: 'POST',
    route: URL_LOGIN_PASSWORD,
    isSecure: true,
  });
}

function createAccount(data: CreateAccountRequest): Promise<any> {
  return requestClan({
    data,
    type: 'POST',
    route: URL_REGISTER,
    isSecure: true,
  });
}

export default {
  loginUsername,
  loginPassword,
  createAccount
}
