import { Component, Input, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
	selector: 'app-photos',
	styleUrls: ['./photos.style.css', './photos.styl'],
	templateUrl: './photos.template.html'
})
export class PhotosComponent implements OnInit {
	@Input('city') city: 'mora' | 'pinecity';
	@Input('photoUrls') photoUrls: string[];
	galleryOptions: NgxGalleryOptions[];
	galleryImages: NgxGalleryImage[];

	active: string[];
	isMore: string;
	largeUrl: string;
	constructor() {
		this.isMore = "More";
		if (this.photoUrls) {
			this.active = this.photoUrls.slice(0, 3);
		}
	}
	toggleMore() {
		if (this.active.length > 4) {
			this.active = this.photoUrls.slice(0, 3);
			document.getElementById("photos").className += " hidden";
			this.isMore = "More";
		} else {
			this.active = this.photoUrls;
			document.getElementById("photos").className = "gallery";
			this.isMore = "Less";
		}
	}
	ngOnInit(): void {
		this.galleryOptions = [
			{
				width: '600px',
				height: '600px',
				thumbnailsColumns: 4,
				imageAnimation: NgxGalleryAnimation.Slide
			},
			// max-width 800
			{
				breakpoint: 800,
				width: '100%',
				height: '600px',
				imagePercent: 80,
				thumbnailsPercent: 20,
				thumbnailsMargin: 20,
				thumbnailMargin: 20
			},
			// max-width 400
			{
				breakpoint: 400,
				preview: false
			}
		];
		let photos = [];
		if (typeof this.photoUrls === 'object') {
			for (const key of Object.keys(this.photoUrls)) {
				photos.push(this.photoUrls[key].url);
			}
		} else {
			photos = this.photoUrls;
		}
		this.galleryImages = photos.map((image: any) => {
			return {
				small: image.url || image,
				medium: image.url || image,
				big: image.url || image
			};
		});
	}
}
