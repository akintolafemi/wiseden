import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProfileResponse, ProfileResponseSave } from '../interfaces/profile';
import { API } from '../network';

const TOKEN = 'GZI_SESSION_TOKEN';
const PROFILE = 'GZI_PROFILE';
const PROFILE_ID = 'GZI_PROFILE_ID';
const PAGE_COUNT = 'PAGE_COUNT';

export const SharedPref = {
  storePageCount: async (page: string) => {
    try {
      return await AsyncStorage.setItem(PAGE_COUNT, page);
    } catch (error) {
      console.log('Store save error', error);
    }
  },
  getPageCount: async () => {
    try {
      return await AsyncStorage.getItem(PAGE_COUNT);
    } catch (error) {
      console.log('Store read error', error);
    }
  },
  clearUserData: () => {
    try {
      AsyncStorage.removeItem(TOKEN);
      AsyncStorage.removeItem(PROFILE);
      AsyncStorage.removeItem(PROFILE_ID);
      AsyncStorage.removeItem(PAGE_COUNT);
    } catch (error) {
      console.log('Store read error', error);
    }
  },
  deleteProfileData: () => {
    try {
      AsyncStorage.removeItem(PROFILE);
    } catch (error) {
      console.log('Store read error', error);
    }
  },
  restoreProfileData: async (): Promise<ProfileResponseSave | null> => {
    try {
      // const data = await AsyncStorage.getItem(PROFILE);
      // return data ? JSON.parse(data) : null;
    } catch (error) {
      console.log('Store read error', error);
      return null;
    }
  },
  storeProfileData: async (userid: number | string) => {
    try {
      // const data = await API.getUser({userId: userid});
      // return await AsyncStorage.setItem(PROFILE, JSON.stringify(data.data[0]));
    } catch (error) {
      console.log('Store save error', error);
    }
  },
  getProfileData: async () => {
    try {
      return await AsyncStorage.getItem(PROFILE);
    } catch (error) {
      console.log('Store read error', error);
    }
  },
  storeToken: async (token: string | any) => {
    try {
      return await AsyncStorage.setItem(TOKEN, token);
    } catch (error) {
      console.log('Store save error', error);
    }
  },
  getToken: async () => {
    try {
      return await AsyncStorage.getItem(TOKEN);
    } catch (error) {
      console.log('Store read error', error);
    }
  },
  deleteToken: () => {
    try {
      AsyncStorage.removeItem(TOKEN);
    } catch (error) {
      console.log('Store read error', error);
    }
  },
  storeProfileID: async (profileid: string) => {
    try {
      return await AsyncStorage.setItem(PROFILE_ID, profileid);
    } catch (error) {
      console.log('Store save error', error);
    }
  },
  getProfileID: async () => {
    try {
      return await AsyncStorage.getItem(PROFILE_ID);
    } catch (error) {
      console.log('Store read error', error);
    }
  },
  deleteProfileID: () => {
    try {
      AsyncStorage.removeItem(PROFILE_ID);
    } catch (error) {
      console.log('Store read error', error);
    }
  },
};
