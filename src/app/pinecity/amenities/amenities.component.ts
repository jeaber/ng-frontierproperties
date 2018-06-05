import { Component, OnInit } from '@angular/core';

import { FireData } from '../../services';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'amenities',  // <home></home>
  providers: [
    FireData
  ],
  styleUrls: ['./amenities.style.css', './../../app.component.styl'],
  templateUrl: './amenities.template.html'
})
export class Amenities implements OnInit {
  data;
  listOne: Observable<any>;
  listTwo: Observable<any>;

  constructor( public fd: FireData, public af: AngularFireDatabase) {
    this.data = fd.pinecity;
    this.listOne = af.list('/pinecity/amenities/listOne').valueChanges();
    this.listTwo = af.list('/pinecity/amenities/listTwo').valueChanges();
  }

  ngOnInit() {
  }
}