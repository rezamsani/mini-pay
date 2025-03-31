import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// 🔹 سایر سرویس‌ها و مسیرها
import { PaymentService } from './services/payment.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes),
     provideClientHydration(withEventReplay()),
     provideHttpClient(withFetch()), // استفاده از Fetch API برای بهبود SSR

    

    // سرویس‌های داخلی شما
    PaymentService
  ],  
};
