import {networkResponse} from './network';

export interface NetworkResponse extends networkResponse {
  data?: any;
  requests?: any;
}

export interface VerifyMobileRequest {
  mobile: string;
  userid?: string; 
}

export interface VerifyEmailRequest {
  email: string;
  userid?: string;
}

export interface VerifyCodeParams {
  code: string;
  cacheid: string;
  mobile: string;
  type: string;
}

export interface VerifyResponse extends networkResponse {
  cacheid: string;
}

export interface CategoriesResponse extends networkResponse {
  categories?: any
}