import {networkResponse} from './network';

export interface LoginUsernameRequest {
  email: string;
  medium: "mobile";
}

export interface LoginPasswordRequest {
  usernameToken: string;
  suppliedPassword: string;
  medium: "mobile";
}

export interface ResetPasswordRequest {
  security: string;
  repeat_security: string;
  code: string;
  resetid: string;
  username: string;
}