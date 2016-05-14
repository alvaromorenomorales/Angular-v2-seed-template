import {
  beforeEachProviders,
  describe,
  ddescribe,
  expect,
  iit,
  it,
  inject,
  injectAsync
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {HomeComponent} from './home.component';

describe('Home Component', () => {

  beforeEachProviders((): any[] => []);

  // it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
  //   return tcb.createAsync(HomeComponent).then((fixture: ComponentFixture) => {
  //     fixture.detectChanges();
  //   });
  // }));

});
