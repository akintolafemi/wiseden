import {networkResponse} from './network';

export interface ProfileResponse extends networkResponse {
  
}

export interface ProfileResponseSave {
  id: string | number;
  user_type: string;
  othernames: string;
  lastname: string;
  user_role_id: string;
  username: string;
  email: string;
  phone_number: string;
  department_id: any;
  company_id: any;
  location_id: any;
  vendor_id: any;
  user_status: number | string;
  created_at: any;
  user_role_name: string;
  profile_image_url: string;
}

export interface CreateUserRequest {
  username: string;
  security: string;
  fullname: string;
  mobile?: string;
  email?: string;
  state_of_residence?: string;
  city?: string;
  profile_type: string;
  email_verified: number;
  mobile_verified: number;
}

export interface EditUserRequest {
  userid: string;
  fullname?: string;
  homeaddress?: string;
  city?: string;
  state_of_residence?: string;
}

export interface CreateUserResponse extends networkResponse {
  userid: string;
}