import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginReq } from '../models/login-req.model';
import { ApiWrapper } from '../../shared/models/api-wrapper.model';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginResp } from '../models/login-resp.model';
import { TokenService } from './token.service';
import { IObjectKeys } from '../../shared/models/object-keys.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = environment.apiUrl+'account/auth/';
  private loggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }

  login(req: LoginReq) {
    // let urlLogin = req.loginWith === 'web' ? 'login' : 'login/user';
    const urlLogin = 'login/user';

    return this.httpClient.post<ApiWrapper<LoginResp>>(`${this.apiURL}${urlLogin}`, req)
      .pipe(
        map((res) => {
          if (res.data) {
            this.tokenService.setAccessToken(res.data.token);
            // const role = req.loginWith === 'web' ? res.data.akun.fullname : res.data.akun.profile.role || 'Unknown';
            const role = res.data.akun.profile.role || 'Unknown';
            
            const userData: IObjectKeys = {
              id: res.data.akun.id,
              email: res.data.akun.email,
              isActive: res.data.akun.isActive,
              profileId: res.data.akun.profileId,
              fullname: role,
            };
            this.tokenService.setUserData(userData);
            return res.data;
          } else {
            throw new Error('Gagal Login Username dan Password Tidak Sesuai');
          }
        })
      );
  }
}
