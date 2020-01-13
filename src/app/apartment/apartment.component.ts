import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FireData } from '../services';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppDataService, ApartmentData } from '../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-apartment',
	styleUrls: ['./apartment.style.styl', './../app.component.styl'],
	templateUrl: './apartment.template.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApartmentComponent implements OnInit {
	data$: Observable<{ welcomeText: string, neighborhoodText: string, photoUrls: { url: string, key: string }[] }>;
	city: 'mora' | 'pinecity';
	apartmentdata: ApartmentData;
	constructor(private route: ActivatedRoute, public af: AngularFireDatabase, private cdr: ChangeDetectorRef,
		public firedata: FireData, public appData: AppDataService, private sanitizer: DomSanitizer) {
	}
	ngOnInit() {
		this.route.data.subscribe((data: { city: 'mora' | 'pinecity' }) => {
			this.apartmentdata = this.appData.staticdata[data.city];
			this.data$ = this.firedata.getCityData(data.city).pipe(tap(console.log));
			this.city = data.city;
			console.log(data);
			this.cdr.detectChanges();
		});
	}
	public getCleanUrl(url) {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}
}
