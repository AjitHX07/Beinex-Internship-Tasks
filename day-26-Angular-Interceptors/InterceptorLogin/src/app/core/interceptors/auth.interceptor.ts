import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);

  // Get token from localStorage
  const token = localStorage.getItem('token');

  // Show loader
  loaderService.show();

  // Clone the request and add auth header if token exists
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Continue with the request and hide loader when done
  return next(req).pipe(
    finalize(() => {
      loaderService.hide();
    })
  );
};