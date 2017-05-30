import {CreatedItem} from "./created-item.model";

export class Person extends CreatedItem {

  protected firstname: string;
  protected lastname: string;

  protected emailInfos: {
    email: '',
    confirmed: false,
    tokenEmail: '';
  };

  protected phone: string; // pour les "->0<-6..."

  protected lang: string = 'en';

  protected socialId: any;

  protected lastConnexion: Date;

  protected ip: string;

  // Professional Side
  protected url: string;

  protected activity: {
    salaried: false,
    job: '',
    revenue: 0,
    division: '',
    function: '',
    description: '',
    company: {
      name: ''
      type: ''
      sector: ''
      size: ''
    }
  };

  /*** His or her answers ***/
  protected answers: any = []
}
