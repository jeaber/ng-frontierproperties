import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/';
@Injectable()
export class FireData {

	private _pinecityData: Observable<any>;
	private _moraData: Observable<any>;
	private _storage: any;
	private _pinecityData$: ReplaySubject<any>;
	private _moraData$: ReplaySubject<any>;
	private _pinecityRef;
	private _moraRef;

	constructor(public af: AngularFireDatabase) {
		this._pinecityData$ = new ReplaySubject();
		this._moraData$ = new ReplaySubject();
		this._pinecityRef = this.af.object('/pinecity');
		this._moraRef = this.af.object('/mora');
		this._pinecityData = this.af.object('/pinecity').valueChanges();
		this._moraData = this.af.object('/mora').valueChanges();

		this._pinecityData.subscribe((data) => {
			this._pinecityData$.next(data);
		});
		this._moraData.subscribe((data) => {
			this._moraData$.next(data);
		});
	}
	public getCityData(city: 'mora' | 'pinecity'): Observable<any> {
		if (!this._moraData) { console.error('NO ANGULARFIRE OBSERVABLE'); }
		const ref = (city === 'mora' ? this._moraData : this._pinecityData);
		return ref;
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
