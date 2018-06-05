import { Component } from '@angular/core';

import { FireData } from '../../services';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'availability-mora',  // <home></home>
  providers: [
    FireData
  ],
  styleUrls: ['./availability.style.css', './../../app.component.styl'],
  templateUrl: './availability.template.html'
})
export class AvailabilityMora {
  data;
  singleListings: Observable<any>;
  doubleListings: Observable<any>;
  constructor( public fd: FireData, public af: AngularFireDatabase,) {
    this.data = fd.mora;
    this.singleListings = af.list('/mora/rooms/single/availability').valueChanges();
    this.doubleListings = af.list('/mora/rooms/double/availability').valueChanges();
  }
  // image floor plans
  isActive(e) {
    if (e.target.className === "active")
      e.target.className = ""
    else
      e.target.className = "active"

  }
  ngOnInit() {
  }
}