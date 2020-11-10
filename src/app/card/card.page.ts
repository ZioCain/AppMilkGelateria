import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-card',
	templateUrl: 'card.page.html',
	styleUrls: ['card.page.scss']
})
export class CardPage {
	spots:any[]=[
		{index:1, fill: false},
		{index:2, fill: false},
		{index:3, fill: false},
		{index:4, fill: false},
		{index:5, fill: false},
		{index:6, fill: false},
		{index:7, fill: false},
		{index:8, fill: false},
		{index:9, fill: false},
		{index:10, fill: false}
	];
	logged:boolean=false;
	card:any;
	constructor(
		private api:APIService,
		private user:UserService
	){
		var userData = this.user.GetUserData();
		var card = this.user.GetCard();
		this.logged = userData!==null;
	}
}
