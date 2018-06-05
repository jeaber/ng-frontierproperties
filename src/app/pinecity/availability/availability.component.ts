import { Component } from '@angular/core';

import { FireData } from '../../services';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'availability',  // <home></home>
  providers: [
    FireData
  ],
  styleUrls: ['./availability.style.css', './../../app.component.styl'],
  templateUrl: './availability.template.html'
})
export class Availability {
  data;
  singleListings: Observable<any>;
  doubleListings: Observable<any>;

  /*
    data.rooms.subtext
              .single
              .double.sqft
                     .availability
  */
  constructor( public fd: FireData, public af: AngularFireDatabase,) {
    this.data = fd.pinecity;
    this.singleListings = af.list('/pinecity/rooms/single/availability').valueChanges();
    this.doubleListings = af.list('/pinecity/rooms/double/availability').valueChanges();
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