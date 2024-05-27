import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginReq } from '../../models/login-req.model';
import { LoginResp } from '../../models/login-resp.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loading: boolean = false;

  isLogin: boolean = false;

  formGroup: FormGroup = this.initFormGroup();

  dataSource?: LoginResp;

  role?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {  
  }

  initFormGroup(): FormGroup {
      return new FormGroup({
          username: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),
      });
  }


  login() {
    this.loading = true;
  
    if (this.formGroup.valid) {
      const formData = this.formGroup.value;
      const formnewData: LoginReq = {
        email: formData.username,
        password: formData.password,
        loginWith: 'web',
      };
      
      this.authService.login(formnewData).subscribe({
        next: (resp) => {
          this.isLogin = true;
          this.dataSource = resp;
          this.router.navigate(['dashboard']);
          this.loading = false;
        },
        error: (err) => {
          this.isLogin = false;
          this.loading = false;
        }
      });
    } else {
      this.isLogin = false;
      this.loading = false; // Set loading false jika form tidak valid
    }
  }
  
  // loginApp() {
  //   if (this.formGroup.valid) {
  //     const formData = this.formGroup.value;
  //     const formnewData: LoginReq = {
  //       email: formData.username,
  //       password: formData.password,
  //       loginWith: 'app',
  //     };
  
  //     this.authService.login(formnewData).subscribe({
  //       next: (resp) => {
  //         this.isLogin = true;
  //         this.dataSource = resp;
  //         this.router.navigate(['dashboard']);
  //         this.loading = false;
  //       },
  //       error: (err) => {
  //         console.error(err);
  //         this.isLogin = false;
  //         this.loading = false; // Set loading false jika login app gagal
  //       }
  //     });
  //   } else {
  //     this.loading = false; // Set loading false jika form tidak valid
  //   }
  // }  
}

