import { emailRegEx } from '../utils/regex';

export class User {

  private _firstname: string;
  private _lastname: string;

  private _username: string;
  private _email: string;
  private _password: string;
  private _attempts: number = 0;

  private _birth: {
    date: '01-01-1900',
    place: ''
  };
  private _address: {
    country: '',
    city: ''
  };

  /*** Account Settings ***/
  private avatarFile: string = 'undefinedAvatar.png'; // it's an example
  /*
   private password: string;
   */

  /*** More Informations ***/
  private minibio: string;

  constructor(user?: any) {
    if (user) {
      this.firstname = user.firstname || "";
      this.lastname = user.lastname || "";
      this.email = user.email || "";
      this.password = user.password || "";
    }
  }

  public toJSON() {
    const json = {};
    for (let property of Object.getOwnPropertyNames(this)) {
      property = property.replace(/^_/, '');
      if (typeof this[property] !== 'undefined') {
        json[property] = this[property];
      }
    }
    return json;
  }

  get username(): string {
    return this._username;
  }
  set username(username: string) {
    if (username)
      this._username = username.charAt(0).toUpperCase() + username.slice(1);
  }

  get firstname(): string {
    return this._firstname;
  }
  set firstname(firstname: string) {
    if (firstname)
      this._firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
  }

  get lastname(): string {
    return this._lastname;
  }
  set lastname(lastname: string) {
    if (lastname)
      this._lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
  }

  get email(): string {
    if (emailRegEx.test(this._email))
      return this._email;
    return null;
  }
  set email(email: string) {
    if (email && emailRegEx.test(email))
      this._email = email;
  }

  get password(): string {
    return this._password;
  }
  set password(password: string) {
    if (password)
      this._password = password;
  }

  get attemps(): number {
    return this._attempts;
  }
  set attemps(attemps: number) {
    if (attemps)
      this._attempts = attemps;
  }


}
