import { Injectable } from '@angular/core';
import { Http, Response } from './_http';
import { Observable } from 'rxjs/Observable';

import { Invention } from '../models/invention.model';
import {User} from "../models/user.model";

@Injectable()
export class InventionService {

  constructor(private http: Http) {
  }

  create(user: User): Observable<Invention> {
    return this.http.post('/invention')
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  get(): Observable<Invention> {
    return this.http.get('/invention')
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addUser(user: User): Observable<Invention> {
    return this.http.post('/invention/addUser')
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
