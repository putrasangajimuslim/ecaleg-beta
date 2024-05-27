import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../auth/services/token.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const userData = tokenService.getUserData();

  if (!tokenService.isLoggedIn()) {
    router.navigate(['auth/login']);
    return false;
  }

  if (userData.fullname === 'User' || userData.fullname === 'saksi') {
    console.log(userData.fullname);
    
    router.navigate(['access-denied']);
    return false;
  }

  return true;
};
