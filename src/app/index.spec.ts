import {describe, it, expect, beforeEachProviders, inject} from '@angular/core/testing';
import {IndexApp} from '../app/index';

beforeEachProviders(() => [IndexApp]);

describe('App: Template', () => {
  // it('should have the `defaultMeaning` as 42', inject([IndexApp], (app: IndexApp) => {
  //   expect(app.defaultMeaning).toBe(42);
  // }));

  // describe('#meaningOfLife', () => {
  //   it('should get the meaning of life', inject([IndexApp], (app: IndexApp) => {
  //     expect(app.meaningOfLife()).toBe('The meaning of life is 42');
  //     expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
  //   }));
  // });
});

