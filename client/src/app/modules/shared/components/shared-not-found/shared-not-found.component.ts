import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService, initTranslation } from './i18n/i18n';

@Component({
  selector: 'app-shared-not-found',
  templateUrl: './shared-not-found.component.html',
  styleUrls: ['./shared-not-found.component.styl']
})
export class SharedNotFoundComponent implements OnInit {

  constructor(private _titleService: Title,
              private _translateService: TranslateService) {}

  ngOnInit(): void {
    initTranslation(this._translateService);
    this._translateService.get('404.TITLE.LEFT').subscribe((res: string) => {
      this._titleService.setTitle(res);
    });
  }

}
