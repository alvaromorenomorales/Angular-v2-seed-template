import {Component, OnInit} from '@angular/core';

import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdSidenav, MdSidenavLayout } from '@angular2-material/sidenav';

import {
  TranslateService, TranslatePipe
} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'template-app',
  providers: [],
  styleUrls: ['./app/index.css'],
  templateUrl: "./app/index.html",
  directives: [
    MdButton, MdToolbar, MdIcon, MdSidenav, MdSidenavLayout
  ],
  viewProviders: [
    MdIconRegistry
  ],
  pipes: [TranslatePipe]
})
export class IndexApp implements OnInit{

  // mdIconRegistry
  //   .addSvgIcon('thumb-up', '/demo-app/icon/assets/thumbup-icon.svg')
  //   .addSvgIconSetInNamespace('core', '/demo-app/icon/assets/core-icon-set.svg')
  //   .registerFontClassAlias('fontawesome', 'fa');
  
  constructor(public translate: TranslateService) {
    console.log('entra a constructor');
    this.translate.get("salute")
      .subscribe(
      (data) => {
        console.log(data + " from home.ts");
      },
      (error) => {
        console.log(error);
      });
  }
  
  ngOnInit() {
    let userLang = navigator.language.split('-')[0];
    userLang = /(es|en)/gi.test(userLang) ? userLang : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);
  }
  
  clicked(){
    
  }
}
