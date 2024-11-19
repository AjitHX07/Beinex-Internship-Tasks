import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service'


export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(UserService);

  const router = inject(Router);

  if (authService.isAdmin()) {
    return true;
  }

  return router.createUrlTree(['/user-dashboard']);
};