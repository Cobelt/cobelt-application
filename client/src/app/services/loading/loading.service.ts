import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoadingService {

  private _loadingSource = new Subject<boolean>();


  constructor() {
    this._loadingSource.next(false);
  }

  get isLoading$(): Observable<boolean> {
    return this._loadingSource.asObservable();
  }

  public startLoading (): void {
    this._loadingSource.next(true);
  }

  public stopLoading (): void {
    this._loadingSource.next(false);
  }
}
