import {Person} from "./person.model";

export class User extends Person {
  private email: string;
  private password: string;

  /*** Account Settings ***/
  private avatarFile: string = 'undefinedAvatar.png'; // it's an example
  /*
   private password: string;
   */
  private attempts: number = 0;

  /*** More Informations ***/
  private minibio: string;


  private address: {
    country: '',
    city: ''
  };

  private birth: {
    date: '01-01-1900',
    place: ''
  };

  private technologies: any = [];

  private experience: String;

  /*** Inventions ***/
  private invention: any = [];
}
