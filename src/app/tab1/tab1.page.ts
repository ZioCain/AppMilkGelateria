import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	offerte:any[]=[{
		image: "https://picsum.photos/300/300",
		title: "20% di sconto sul gusto Fragola",
		text: "Se ordini entro oggi il gusto fragola, otterrai il 20% di sconto sull'ordine complessivo"
	}];
	constructor(
		private api:APIService
	){
		/*
		this.api.GetOfferte().subscribe((res:any[])=>{
			this.offerte = res;
		});//*/
	}
}
