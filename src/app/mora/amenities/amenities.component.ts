import { Component } from '@angular/core';

import { FireData } from '../../services';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'amenities-mora',
  styleUrls: ['./amenities.style.css', './../../app.component.styl'],
  templateUrl: './amenities.template.html'
})
export class AmenitiesMora {
  data;
  listOne: Observable<any>;
  listTwo: Observable<any>;

  constructor( public fd: FireData, public af: AngularFireDatabase,) {
    this.data = fd.mora;
    this.listOne = af.list('/mora/amenities/listOne').valueChanges();
    this.listTwo = af.list('/mora/amenities/listTwo').valueChanges();
  }

  ngOnInit() {
  }
}