import { Injectable } from '@angular/core';
import { Http, Response } from './_http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  create(user: User): Observable<User> {
    return this.http.post('/user', user)
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  get(): Observable<User> {
    return this.http.get('/user')
      .map((res: Response) => res.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
