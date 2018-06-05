import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Availability} from './availability';
import { FireData } from '../services';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'pinecity',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    FireData
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./pinecity.style.styl', './../app.component.styl'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './pinecity.template.html'
})
export class Pinecity {
  _data;
  constructor(public af: AngularFireDatabase, public data: FireData) {
    this._data = data.pinecity;
  }

  ngOnInit() {
  }
}
