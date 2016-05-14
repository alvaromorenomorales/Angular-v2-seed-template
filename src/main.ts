import { bootstrap } from '@angular/platform-browser-dynamic';
import {enableProdMode, provide} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import {environment} from './app/environment';
import {IndexApp} from './app/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(IndexApp, [
    HTTP_PROVIDERS,
    provide(TranslateLoader, { 
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/i18n', '.json'), 
      deps: [Http] 
    }),
    TranslateService
  ]
);