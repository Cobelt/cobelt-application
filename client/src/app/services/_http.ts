import { Injectable } from '@angular/core';
import { Http as AngularHttp, Headers, RequestOptions } from '@angular/http';
import * as _ from "lodash";

export { Response } from '@angular/http';

@Injectable()
export class Http {
  private url = 'http://localhost:3001/api';

  constructor(private http: AngularHttp) {
  }

  private _getOptions(options?: object) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions(_.merge({headers: headers, withCredentials: true}, options));
  }

  get(uri: string, options?: object) {
    return this.http.get(this.url + uri, this._getOptions(options));
  }

  post(url: string, data?: object, options?: object) {
    return this.http.post(this.url + url, data, this._getOptions(options));
  }
}
