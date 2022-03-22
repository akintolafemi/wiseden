import {networkResponse} from './network';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse extends networkResponse {
  token?: string;
  resetid?: string;
}

export interface LoginPasswordRequest {
  security?: string;
  token?: string | any;
}

export interface LoginPasswordResponse extends networkResponse {
  token?: string | any;
  userid?: string | any;
}

export interface ResetPasswordRequest {
  security: string;
  repeat_security: string;
  code: string;
  resetid: string;
  username: string;
}