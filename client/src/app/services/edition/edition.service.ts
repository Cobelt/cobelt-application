import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { VisualModifier } from '../../classes/edition/edition-visual/edition-visual.class';
import { CookieService } from "angular2-cookie/core";

@Injectable()
export class EditionService {
  private _hostname: string = 'cobelt';
  private _edMode: boolean = false;

  private _actualThemeName: string;
  private _themes: any = [];

  constructor(@Inject(DOCUMENT) private document: any,
              private _cookieService: CookieService) {
    this._hostname = this.document.location.hostname;

    this._cookieService.remove('visual-modifier-themes');

    this._actualThemeName = this._cookieService.get('visual-modifier-actualTheme') || 'Theme';
    this._themes.push(new Theme(this._actualThemeName, new VisualModifier));
    this._themes = this._cookieService.getObject('visual-modifier-themes') || this._themes;
  }

  get themes(): any{
    return this._themes;
  }

  get visual(): VisualModifier {
    return this.getTheme(this._actualThemeName).visual;
  }

  get actualTheme(): string {
    return this._actualThemeName;
  }
  set actualTheme(name: string) {
    if (this.getTheme(name)) {
      this._actualThemeName = name;
      this._cookieService.put('visual-modifier-actualTheme', this._actualThemeName);
    }
  }

  get edMode(): boolean{
    return this._edMode;
  }
  set edMode(editing: boolean) {
    this._edMode = editing;
  }

  getTheme(name: string): Theme {
    for (const theme of this._themes) {
      if (theme.name === name) {
        return theme
      }
    }
  }

  addTheme(name: string) {
    this._themes.push(new Theme(name, this.getTheme(this._actualThemeName).visual));
    this._cookieService.putObject('visual-modifier-themes', this._themes);
    console.log(this._cookieService.getObject('visual-modifier-themes'));
  }

  removeTheme(name: string) {
    this._themes.slice(this._themes.indexOf(this.getTheme(name)), 1);
    this._cookieService.putObject('visual-modifier-themes', this._themes);
  }

}

export class Theme {
  private _name: string;
  private _visual: VisualModifier;

  constructor (name, visual) {
    this._name = name;
    this._visual = visual;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get visual(): VisualModifier {
    return this._visual;
  }
  set visual(visual: VisualModifier) {
    this._visual = visual;
  }
}