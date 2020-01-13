import { Component, Input, OnInit } from '@angular/core';

import { FireData } from '../../services';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
	selector: 'app-availability',
	styleUrls: ['./availability.style.css', './../../app.component.styl'],
	templateUrl: './availability.template.html'
})
export class AvailabilityComponent implements OnInit {
	@Input('city') city: 'mora' | 'pinecity';
	@Input('data') data;
	singleListings: Observable<any>;
	doubleListings: Observable<any>;
	constructor(public fd: FireData, public af: AngularFireDatabase) {
	}
	ngOnInit() {
		this.singleListings = this.af.list(`/${this.city}/rooms/single/availability`).valueChanges();
		this.doubleListings = this.af.list(`/${this.city}/rooms/double/availability`).valueChanges();
	}
	// image floor plans
	isActive(e) {
		if (e.target.className === "active") {
			e.target.className = "";
		} else {
			e.target.className = "active";
		}
	}
}
