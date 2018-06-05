import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FireData } from './services';

import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to';


import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const FIREBASE = {
  apiKey: 'AIzaSyBZ63LpB90pGKlC2jUz_Rpx2Gv-nUECFAQ',
  authDomain: 'frontier-properties.firebaseapp.com',
  databaseURL: 'https://frontier-properties.firebaseio.com',
  storageBucket: 'frontier-properties.appspot.com'
};

// export const myFirebaseAuthConfig = {
//   provider: AuthProviders.Google,
//   method: AuthMethods.Redirect
// };
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { Pinecity, Availability, Photos, Amenities } from './pinecity';
import { Mora, PhotosMora, AmenitiesMora, AvailabilityMora } from './mora';
import { Admin } from './admin';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pinecity', component: Pinecity },
  { path: 'mora', component: Mora },
  { path: 'admin', component: Admin },
  { path: '**', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    Pinecity, Availability, Photos, Amenities,
    Mora, PhotosMora, AvailabilityMora, AmenitiesMora,
    Admin, HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-frontier'
    }),
    FormsModule,
    //    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE, 'frontier-properties'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatCardModule, MatInputModule
  ],
  providers: [FireData],
  bootstrap: [AppComponent]
})
export class AppModule { }
