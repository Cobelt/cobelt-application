import {Component, EventEmitter} from '@angular/core';
import {EditionService} from '../../../../services/edition/edition.service';
import {MaterializeAction} from 'angular2-materialize';
import {hexRegEx} from '../../../../utils/regex';

@Component({
  selector: 'app-editor-theme',
  templateUrl: './editor-theme.component.html',
  styleUrls: ['./editor-theme.component.styl']
})
export class EditorThemeComponent {

  private _colorInput: string;
  private _themeNameInput: string;

  private _tmpEdColor: string;
  private _tmpThemePrev: any;

  private _modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(private _edService: EditionService) { }

  // Add & remove
  private addColor (): void {
    if (this._colorInput && hexRegEx.test(this._colorInput)) {
      const color: string = this.getMaximizedHex((this._colorInput.charAt(0) === '#' ? this._colorInput.slice(1, this._colorInput.length) : this._colorInput).toUpperCase()); // on enleve le # s'il est présent
      if (!this.checkColorIsAlreadyAdded(color))
        this._edService.visual.addColor('#' + color);
    }
    this._colorInput = '';
  }

  private removeColor (color: string): void { // pas besoin de vérification car la poubelle n'apparait que si on a ajouté cette couleur
    this._edService.visual.removeColor(color);
  }



  private addTheme (): void {
    if (this._themeNameInput.length) {
      this._edService.addTheme(this._themeNameInput);
      this.chooseTheme(this._themeNameInput);
    }
    this._themeNameInput = '';
  }

  private removeTheme (name: string): void { // pas besoin de vérification car la poubelle n'apparait que si on a ajouté ce theme
    if (this._edService.actualTheme !== name)
      this._edService.removeTheme(name);
  }


  // Some tests
  private checkColorIsAlreadyAdded (color: string): boolean {
    const existSame = this._edService.visual.colors.indexOf('#' + color) !== -1;
    let tmpColor: string = '';

    if (tmpColor.charAt(0) === tmpColor.charAt(1) && tmpColor.charAt(2) === tmpColor.charAt(3) && tmpColor.charAt(4) === tmpColor.charAt(5))
      tmpColor = tmpColor.charAt(0) + tmpColor.charAt(2) + tmpColor.charAt(4);
    else
      return existSame;

    const existAlmostSame = this._edService.visual.colors.indexOf('#' + tmpColor) !== -1;
    return existSame || existAlmostSame;
  }

  private getMaximizedHex(tmpColor: string): string {
    return tmpColor.length === 3 ? tmpColor.charAt(0) + tmpColor.charAt(0) + tmpColor.charAt(1) + tmpColor.charAt(1) + tmpColor.charAt(2) + tmpColor.charAt(2) : tmpColor; // TODO idem, faire plus propre
  }


  // Choose this color
  private choose(type: string, color: string): void {
    this._tmpEdColor = color;
    switch (type) {
      case 'primary':
        this._edService.visual.primaryColor = color;
        break;

      case 'secondary':
        this._edService.visual.secondaryColor = color;
        break;

      case 'text':
        this._edService.visual.textColor = color;
        break;

      case 'navText':
        this._edService.visual.navTextColor = color;
        break;
    }
  }

  private chooseTheme(name: string) {
    this._tmpThemePrev = this._edService.getTheme(name);
    this._edService.actualTheme = name;
  }

  // Previsualisation on hover
  private hover (type: string, event): void {
    const newColor = event.target.value;
    if (event.type === 'mouseenter') {
      switch (type) {
        case 'primary':
          this._tmpEdColor = this._edService.visual.primaryColor;
          this._edService.visual.primaryColor = newColor;
          break;

        case 'secondary':
          this._tmpEdColor = this._edService.visual.secondaryColor;
          this._edService.visual.secondaryColor = newColor;
          break;

        case 'text':
          this._tmpEdColor = this._edService.visual.textColor;
          this._edService.visual.textColor = newColor;
          break;

        case 'navText':
          this._tmpEdColor = this._edService.visual.navTextColor;
          this._edService.visual.navTextColor = newColor;
          break;
      }
    }
    else {
      switch (type) {
        case 'primary':
          this._edService.visual.primaryColor = this._tmpEdColor;
          break;

        case 'secondary':
          this._edService.visual.secondaryColor = this._tmpEdColor;
          break;

        case 'text':
          this._edService.visual.textColor = this._tmpEdColor;
          break;

        case 'navText':
          this._edService.visual.navTextColor = this._tmpEdColor;
          break;
      }
    }
  }

  private hoverTheme(event): void {
    if (event.type === 'mouseenter') {
      this._tmpThemePrev = this._edService.actualTheme;
      this._edService.actualTheme = event.target.value;
    }
    else {
      this._edService.actualTheme = this._tmpThemePrev;
    }
  }

  private restore(): void {
    this._edService.visual.resetDefault();
  }

  private alignLogo(alignment: string): void {
    this._edService.visual.logoAlignment = alignment;
  }

}
