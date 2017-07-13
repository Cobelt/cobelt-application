import { Injectable } from '@angular/core';
import { Http, Response } from '../http';
import { Observable } from 'rxjs/Observable';

import { User } from '../../models/user.model';

@Injectable()
export class UserService {

  constructor(private _http: Http) {}

  public create(user: User): Observable<User> {
    return this._http.post('/user', user.toJSON())
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  public update(user: User): Observable<User> {
    return this._http.post('/user', user.toJSON())
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  public get(): Observable<User> {
    return this._http.get('/user/me')
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
