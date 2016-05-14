import {Component} from '@angular/core';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';

import {
  TranslateService, TranslatePipe
} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'template-app',
  providers: [],
  templateUrl: "./app/index.html",
  directives: [
    MdToolbar, MdIcon, MdSidenav, MdSidenavLayout
  ],
  viewProviders: [
    MdIconRegistry
  ],
  pipes: [TranslatePipe]
})
export class IndexApp {
  
  
  // mdIconRegistry
  //   .addSvgIcon('thumb-up', '/demo-app/icon/assets/thumbup-icon.svg')
  //   .addSvgIconSetInNamespace('core', '/demo-app/icon/assets/core-icon-set.svg')
  //   .registerFontClassAlias('fontawesome', 'fa');
  
  
  // defaultMeaning: number = 42;

  // meaningOfLife(meaning?: number) {
  //   return `The meaning of life is ${meaning || this.defaultMeaning}`;
  // }
  
  constructor(public translate: TranslateService) {
    console.log('entra a constructor');
    this.langInit();
    
    this.translate.get("salute")
      .subscribe(
      (data) => {
        console.log(data + " from home.ts");
      },
      (error) => {
        console.log(error);
      });
    
  }
  
  langInit() {
    let userLang = navigator.language.split('-')[0];
    userLang = /(es|en)/gi.test(userLang) ? userLang : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);
  }
}
