import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';
// 🔹 سایر سرویس‌ها و مسیرها
import { PaymentService } from './services/payment.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UiService } from './services/ui.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), // استفاده از Fetch API برای بهبود SSR
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers



    // سرویس‌های داخلی شما
    PaymentService,
    UiService
  ],
};
