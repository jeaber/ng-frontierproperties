import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FireData } from '../services';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`Admin` component loaded asynchronously');

@Component({
	selector: 'admin',
	styleUrls: ['./admin.style.styl', './../app.component.styl'],
	templateUrl: './admin.template.html'
})
export class Admin implements OnInit {
	public authState: { uid: any; } = { uid: false };
	public uid = undefined;
	sub$;
	localState: any;
	data: any;
	form: any;
	newData: any;
	singleListings: any[];
	doubleListings: any[];
	listOne: any[];
	listTwo: any[];
	listOneItem;
	listTwoItem;
	ref;
	slref: AngularFireList<any>;
	dlref: AngularFireList<any>;
	listTworef: AngularFireList<any>;
	listOneref: AngularFireList<any>;
	pushDouble: string;
	pushSingle: string;
	selectedCityString: string;
	photourlsRef: AngularFireList<any>;
	photosList: { key: string, url: string }[];
	constructor(public afAuth: AngularFireAuth, public route: ActivatedRoute, public fd: FireData, public db: AngularFireDatabase, ) {

	}
	ngOnInit() {
		const context = this;
		context.authState['uid'] = false;
		this.selectedCityString = '/pinecity';

		this.data = this.fd.pinecity;
		this.ref = this.fd.pinecityRef;
		this.pushSingle = '';
		this.pushDouble = '';
		this.listOneItem = '';
		this.listTwoItem = '';
		this.afAuth.authState.subscribe(auth => {
			console.log('NEW auth!:', auth);
			if (auth) {
				context.authState = auth;
				if (auth.uid) {
					context.uid = auth.uid;
				}
			} else { context.uid = undefined; }
		});
		this.form = {
			welcomeText: '',
			neighborhoodText: '',
			amenities: {
				paragraphOne: '',
				paragraphTwo: ''
			},
			rooms: {
				subtext: '',
				single: { sqft: '' },
				double: { sqft: '' },
			}
		};
		this.loadPinecity();
	}
	loadPinecity() {
		const context = this;
		if (this.sub$) {
			this.sub$.unsubscribe();
		}
		this.selectedCityString = '/pinecity';
		this.data = this.fd.pinecity;
		this.ref = this.fd.pinecityRef;

		this.sub$ = this.fd.pinecitySubject.subscribe((data) => {
			for (const prop in data) {
				if (context.form[prop] !== undefined) {
					console.log('changing ', context.form[prop], ' to', data[prop]);
					context.form[prop] = data[prop];
				}
			}
		});
		this.loadAvailabilities();
		this.loadPhotos();
	}
	loadMora() {
		const context = this;
		console.log("this.singleListings", this.singleListings);
		if (this.sub$) {
			this.sub$.unsubscribe();
		}
		this.selectedCityString = '/mora';
		this.data = this.fd.mora;
		this.ref = this.fd.moraRef;

		this.sub$ = this.fd.moraSubject.subscribe((data) => {
			for (const prop in data) {
				if (context.form[prop] !== undefined) {
					console.log('changing ', context.form[prop], ' to', data[prop]);
					context.form[prop] = data[prop];
				}
			}
		});
		this.loadAvailabilities();
		this.loadPhotos();

	}
	loadPhotos() {
		this.photourlsRef = this.db.list<any>(this.selectedCityString + '/photoUrls');
		const photosList = this.photourlsRef.snapshotChanges().map(changes => {
			return changes.map(c => ({ key: c.payload.key, url: c.payload.val().url || c.payload.val() }));
		});
		photosList.subscribe(items => {
			this.photosList = items;
		});
	}
	loadAvailabilities() {
		////////////////
		this.slref = this.db.list<any>(this.selectedCityString + '/rooms/single/availability');
		this.dlref = this.db.list<any>(this.selectedCityString + '/rooms/double/availability');
		this.listOneref = this.db.list<any>(this.selectedCityString + '/amenities/listOne');
		this.listTworef = this.db.list<any>(this.selectedCityString + '/amenities/listTwo');
		// Use snapshotChanges().map() to store the key
		const sl = this.slref.snapshotChanges().map(changes => {
			return changes.map(c => ({ key: c.payload.key, text: c.payload.val().text || c.payload.val() }));
		});
		const dl = this.dlref.snapshotChanges().map(changes => {
			return changes.map(c => ({ key: c.payload.key, text: c.payload.val().text || c.payload.val() }));
		});
		const listOne = this.listOneref.snapshotChanges().map(changes => {
			console.log(changes);
			return changes.map(c => ({ key: c.payload.key, text: c.payload.val().text || c.payload.val() }));
		});
		const listTwo = this.listTworef.snapshotChanges().map(changes => {
			console.log(changes);
			return changes.map(c => ({ key: c.payload.key, text: c.payload.val().text || c.payload.val() }));
		});
		sl.subscribe(listings => {
			this.singleListings = listings;
		});
		dl.subscribe(listings => {
			this.doubleListings = listings;
		});
		listOne.subscribe(items => {
			this.listOne = items;
		});
		listTwo.subscribe(listings => {
			this.listTwo = listings;
		});
	}
	public cityString() {
		if (this.selectedCityString === '/pinecity') {
			return 'Pine City';
		} else {
			return 'Mora';
		}

	}
	login() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}

	logout() {
		this.afAuth.auth.signOut();
	}

	onSave() {
		this.ref.update(this.form);
	}




}
