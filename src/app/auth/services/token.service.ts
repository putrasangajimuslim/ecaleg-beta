import { Injectable } from '@angular/core';
import { IObjectKeys } from '../../shared/models/object-keys.model';

const SESSION_STORAGE_KEY = {
  accessToken:  'accessToken',
  userData: 'userData',
  accessMenu: 'accessMenu',
};

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  getAccessToken() {
    const token = sessionStorage.getItem(SESSION_STORAGE_KEY.accessToken);
    return token;
  }

  setAccessToken(token: string) {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY.accessToken,
      token,
    );
  }

  getUserData() {
    const userData = sessionStorage.getItem(SESSION_STORAGE_KEY.userData);
    return userData ? JSON.parse(userData) : userData;
  }

  setUserData(userData: IObjectKeys) {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY.userData,
      JSON.stringify(userData),
    );
  }

  getAccessMenu() {
    const accessMenu = sessionStorage.getItem(SESSION_STORAGE_KEY.accessMenu);
    return accessMenu ? JSON.parse(accessMenu) : accessMenu;
  }

  setAccessMenu(accessMenu: IObjectKeys) {
    sessionStorage.setItem(
      SESSION_STORAGE_KEY.accessMenu,
      JSON.stringify(accessMenu),
    );
  }

  isLoggedIn() {
    return !!this.getAccessToken();
  }
}
