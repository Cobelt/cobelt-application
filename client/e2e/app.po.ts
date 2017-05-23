import { browser, element, by } from 'protractor';

export class CobeltV0.0.1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
