import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { FireData } from '../../services';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
@Component({
	selector: 'app-amenities',
	styleUrls: ['./amenities.style.css', './../../app.component.styl'],
	templateUrl: './amenities.template.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmenitiesComponent implements OnInit {
	@Input('city') city: 'mora' | 'pinecity';
	@Input('data') data;
	listOne: Observable<any>;
	listTwo: Observable<any>;

	constructor(public fd: FireData, public af: AngularFireDatabase) {
	}
	ngOnInit() {
		console.log(this.city);
		// this.data$ = this.fd.getCityData(this.city).pipe(tap(console.log));
		this.listOne = this.af.list(`/${this.city}/amenities/listOne`).valueChanges();
		this.listTwo = this.af.list(`/${this.city}/amenities/listTwo`).valueChanges();
	}
}
