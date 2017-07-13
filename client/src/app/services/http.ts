import { Injectable } from '@angular/core';
import { Http as AngularHttp, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
export { Response } from '@angular/http';
import * as _ from 'lodash';

@Injectable()
export class Http {
  private _url = environment.apiUrl;

  constructor(private _http: AngularHttp) {}

  private _getOptions(options?: object) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions(_.merge({headers: headers, withCredentials: true}, options));
  }

  public get(uri: string, options?: object) {
    return this._http.get(this._url + uri, this._getOptions(options));
  }

  public post(uri: string, data?: object, options?: object) {
    return this._http.post(this._url + uri, data, this._getOptions(options));
  }

  public put(uri: string, data?: object, options?: object) {
    return this._http.put(this._url + uri, data, this._getOptions(options));
  }

  public delete(uri: string, options?: object) {
    return this._http.delete(this._url + uri, this._getOptions(options));
  }
}
