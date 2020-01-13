import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface ApartmentData {
	title: string;
	address: string;
	photoUrls: string[];
	googleMapsUrl: string;
	name: string;
}
@Injectable()
export class AppDataService {
	staticdata: { [city: string]: ApartmentData } = {
		mora: {
			title: "Meadow Ridge Apartments in Mora, MN",
			name: "Meadow Ridge Apartments",
			address: "431 West Central Ave, Mora, MN 55051",
			photoUrls: [
				"assets/img/mora/1.jpg",
				"assets/img/mora/2.jpg",
				"assets/img/mora/3.jpg",
				"assets/img/mora/4.jpg",
				"assets/img/mora/5.jpg",
				"assets/img/mora/6.png",
				"assets/img/mora/7.png",
				"assets/img/mora/8.png",
			],
			googleMapsUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyC2oerey91vGgQeuJtsbpek_anXtIUMUGc&q=Meadow+Ridge+Apartments,Mora+MN"
		},
		pinecity: {
			title: "Frontier Properties in Pine City",
			name: "Pine City Apartments",
			address: "615 11th St SW Pine City, MN 55063",
			photoUrls: [
				"assets/img/pinecity/1.jpg",
				"assets/img/pinecity/2.jpg",
				"assets/img/pinecity/3.jpg",
				"assets/img/pinecity/4.jpg",
				"assets/img/pinecity/5.jpg",
				"assets/img/pinecity/6.jpg",
				"assets/img/pinecity/7.jpg",
				"assets/img/pinecity/8.jpg",
				"assets/img/pinecity/9.jpg",
				"assets/img/pinecity/10.jpg",
				"assets/img/pinecity/11.jpg",
			],
			googleMapsUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyC2oerey91vGgQeuJtsbpek_anXtIUMUGc&q=Pine+City+Apartments,Pine+City+MN"
		}
	};
	constructor(private route: ActivatedRoute) {
		this.route.data.subscribe(data => console.log(data));
	}
}
