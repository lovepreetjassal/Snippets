import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var imageMapResize: any;
@Component({
	selector: 'app-imagemaptest',
	templateUrl: './imagemaptest.component.html',
	styleUrls: ['./imagemaptest.component.css']
})
export class ImagemaptestComponent implements OnInit {
	constructor() { }

	ngOnInit(): void {
		imageMapResize();
	}

	clicked() {
		console.log("Area Clicked")
	}
}
