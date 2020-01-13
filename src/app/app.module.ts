import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
import { NgxGalleryModule } from 'ngx-gallery';

export const FIREBASE = {
	apiKey: 'AIzaSyBZ63LpB90pGKlC2jUz_Rpx2Gv-nUECFAQ',
	authDomain: 'frontier-properties.firebaseapp.com',
	databaseURL: 'https://frontier-properties.firebaseio.com',
	storageBucket: 'frontier-properties.appspot.com'
};

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { Admin } from './admin';
import { AppDataService } from './services/app.service';
import { AmenitiesComponent } from './components/amenities';
import { AvailabilityComponent } from './components/availability';
import { PhotosComponent } from './components/photos';
import 'hammerjs';
import { ApartmentComponent } from './apartment';
export const ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'pinecity', component: ApartmentComponent, data: { city: 'pinecity' } },
	{ path: 'mora', component: ApartmentComponent, data: { city: 'mora' } },
	{ path: 'admin', component: Admin },
	{ path: '**', component: HomeComponent },
];
@NgModule({
	declarations: [
		AppComponent,
		ApartmentComponent, AvailabilityComponent, AmenitiesComponent, PhotosComponent,
		Admin, HomeComponent,
	],
	imports: [
		BrowserModule.withServerTransition({
			appId: 'ng-frontier'
		}),
		FormsModule,
		//    HttpModule,
		RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, useHash: true }),
		ScrollToModule.forRoot(),
		AngularFireModule.initializeApp(FIREBASE, 'frontier-properties'),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		BrowserAnimationsModule,
		MatCardModule, MatInputModule,
		NgxGalleryModule
	],
	providers: [FireData, AppDataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
