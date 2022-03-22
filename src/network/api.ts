import {NetworkResponse, CategoriesResponse} from '../interfaces/global';
import {LoginRequest, LoginResponse, LoginPasswordRequest, LoginPasswordResponse, ResetPasswordRequest} from '../interfaces/login';
import { VerifyMobileRequest, VerifyEmailRequest, VerifyCodeParams, VerifyResponse } from '../interfaces/global';
import { CreateUserRequest, CreateUserResponse, ProfileResponse, EditUserRequest } from '../interfaces/profile';

import {requestClan} from './requests';

const BASE_URL = 'http://68.169.57.98/wisedenapi/';
const URL_LOGIN = BASE_URL;


function login(data: LoginRequest): Promise<NetworkResponse> {
  return requestClan({
    data,
    type: 'POST',
    route: URL_LOGIN,
    isSecure: true,
  });
}

export default {
  login,
}
