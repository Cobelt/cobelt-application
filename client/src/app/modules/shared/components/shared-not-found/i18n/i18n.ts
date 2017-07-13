import { TranslateService } from "@ngx-translate/core";
import { fr } from './fr';
import { en } from './en';

export { TranslateService } from "@ngx-translate/core";

export const initTranslation = function (translate: TranslateService) {
  translate.setTranslation('en', en, true);
  translate.setTranslation('fr', fr, true);
  return translate;
};
