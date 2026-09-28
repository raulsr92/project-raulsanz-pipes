import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localePe from '@angular/common/locales/es-PE'
import localeEs from '@angular/common/locales/es'
import localePt from '@angular/common/locales/pt'

registerLocaleData(localePe,'es-PE')
registerLocaleData(localeEs,'es-ES')
registerLocaleData(localePt,'pt')

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      useValue:'es-PE'
    }

  ]
};
