import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // ✅ SSR-safe localStorage access
  if (isPlatformBrowser(platformId)) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      return true;
    } else {
      router.navigate(['/home']);
      return false;
    }
  }

  // ❌ Block access during SSR if needed
  return false;
};
