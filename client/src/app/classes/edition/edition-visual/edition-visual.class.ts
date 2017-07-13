import {CookieService} from "angular2-cookie/core";
export class VisualModifier {

  private _cookieService: CookieService;

  // Colors
  private _registredColors: any;
  private _primaryColor: string;
  private _secondaryColor: string;
  private _textColor: string;
  private _navTextColor: string;

  // Logo Alignement
  private _logoAlignment: string;

  constructor (color1?, color2?, text?, navText?, logoAlign?, registredColors?) {
    this._cookieService = new CookieService();

    this._registredColors = registredColors || this._cookieService.getObject('visual-modifier-colors') || [];

    this._primaryColor = color1 || this._cookieService.get('visual-modifier-primary') || '#34495e';
    this._secondaryColor = color2 || this._cookieService.get('visual-modifier-secondary') || '#afb4b4';
    this._textColor = text || this._cookieService.get('visual-modifier-text') || '#333';
    this._navTextColor = navText || this._cookieService.get('visual-modifier-navText') || '#FFF';
    this._logoAlignment = logoAlign || this._cookieService.get('visual-modifier-logoAlign') || 'center';


    this._cookieService.putObject('visual-modifier-primary', this.primaryColor);

    this._cookieService.put('visual-modifier-primary', this.primaryColor);
    this._cookieService.put('visual-modifier-secondary', this.secondaryColor);
    this._cookieService.put('visual-modifier-text', this.textColor);
    this._cookieService.put('visual-modifier-navText', this.navTextColor);
    this._cookieService.put('visual-modifier-logoAlign', this.logoAlignment);
  }

  resetDefault () {
    this._cookieService.remove('visual-modifier-primary');
    this._cookieService.remove('visual-modifier-secondary');
    this._cookieService.remove('visual-modifier-text');
    this._cookieService.remove('visual-modifier-navText');
    this._cookieService.remove('visual-modifier-logoAlign');

    this._primaryColor = '#34495e';
    this._secondaryColor = '#afb4b4';
    this._textColor = '#333';
    this._navTextColor = '#FFF';
    this._logoAlignment = 'center';
  }

  get colors () {
    return this._registredColors;
  }
  addColor (colors) {
    this._registredColors.push(colors);
    this._cookieService.putObject('visual-modifier-colors', this._registredColors);
  }
  removeColor (color) {
    const colorIndex = this._registredColors.indexOf(color);
    this._registredColors.splice(colorIndex, 1);
    this._cookieService.putObject('visual-modifier-colors', this._registredColors);
  }


  get primaryColor () {
    return this._primaryColor;
  }
  set primaryColor (color) {
    this._primaryColor = color;
    this._cookieService.put('visual-modifier-primary', this._primaryColor);
  }

  get secondaryColor () {
    return this._secondaryColor;
  }
  set secondaryColor (color) {
    this._secondaryColor = color;
    this._cookieService.put('visual-modifier-secondary', this._secondaryColor);
  }

  get textColor () {
    return this._textColor;
  }
  set textColor (color) {
    this._textColor = color;
    this._cookieService.put('visual-modifier-text', this._textColor);
  }

  get navTextColor () {
    return this._navTextColor;
  }
  set navTextColor (color) {
    this._navTextColor = color;
    this._cookieService.put('visual-modifier-navText', this._navTextColor);
  }

  get logoAlignment () {
    return this._logoAlignment;
  }
  set logoAlignment (color) {
    this._logoAlignment = color;
    this._cookieService.put('visual-modifier-logoAlign', this._logoAlignment);
  }
}
