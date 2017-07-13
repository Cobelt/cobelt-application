import { TranslateService } from '@ngx-translate/core';
import { fr } from './fr';
import { en } from './en';

export { TranslateService } from '@ngx-translate/core';

export const initTranslation = function (translateService: TranslateService) {
  translateService.setTranslation('en', en, true);
  translateService.setTranslation('fr', fr, true);
  return translateService;
};
