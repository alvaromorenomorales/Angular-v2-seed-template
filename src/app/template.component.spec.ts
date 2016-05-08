import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TemplateAppComponent } from '../app/template.component';

beforeEachProviders(() => [TemplateAppComponent]);

describe('App: Template', () => {
  it('should create the app',
      inject([TemplateAppComponent], (app: TemplateAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'template works!\'',
      inject([TemplateAppComponent], (app: TemplateAppComponent) => {
    expect(app.title).toEqual('template works!');
  }));
});
