import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { TranslateService, initTranslation } from './i18n/i18n';

@Component({
    selector: 'app-client-home',
    templateUrl: './client-home.component.html',
    styleUrls: ['./client-home.component.styl']
})
export class ClientHomeComponent implements OnInit {

    constructor(private _titleService: Title,
                private _translateService: TranslateService) { }

    ngOnInit() {
        initTranslation(this._translateService);
        this._titleService.setTitle('Cobelt - Home sweet home');
    }

}
