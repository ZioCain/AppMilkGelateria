import { Component } from '@angular/core';

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
	constructor() {}

}
