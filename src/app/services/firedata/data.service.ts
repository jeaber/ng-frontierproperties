import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FireData {

  private _pinecityData: Observable<any>;
  private _moraData: Observable<any>;
  private _storage: any;
  private _pinecityData$: BehaviorSubject<any>;
  private _moraData$: BehaviorSubject<any>;
  private _pinecityRef;
  private _moraRef;
  // private _panelOpened = new BehaviorSubject<any>(false);;

  constructor(public af: AngularFireDatabase) {
    const context = this;
    this._pinecityData$ = new BehaviorSubject<any>(false);
    this._moraData$ = new BehaviorSubject<any>(false);
    this._pinecityRef = af.object('/pinecity');
    this._moraRef = af.object('/mora');
    this._pinecityData = af.object('/pinecity').valueChanges();
    this._moraData = af.object('/mora').valueChanges();

    this._pinecityData.subscribe((data) => {
      context._pinecityData$.next(data);
    });
    this._moraData.subscribe((data) => {
      context._moraData$.next(data);
    });
  }
  public get pinecity() {
    return this._pinecityData;
  }
  public get pinecitySubject() {
    return this._pinecityData$.asObservable();
  }
  public get mora() {
    return this._moraData;
  }
  public get moraSubject() {
    return this._moraData$.asObservable();
  }
  public get moraRef() {
    return this._moraRef;
  }
  public get pinecityRef() {
    return this._pinecityRef;
  }
  public get storage() {
    return this._storage;
  }
}
