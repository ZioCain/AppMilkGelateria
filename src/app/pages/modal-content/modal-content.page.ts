import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ModalController, IonNav, Platform } from '@ionic/angular';

@Component({
	selector: 'app-modal-content',
	templateUrl: './modal-content.page.html',
	styleUrls: ['./modal-content.page.scss'],
})
export class ModalContentPage {
	login:FormGroup;
	signin:FormGroup;
	show:string='login';
	constructor(
		private frmBldr:FormBuilder,
		private modalController: ModalController,
		private nav: IonNav
	){
		this.login = frmBldr.group({
			email: ['', [Validators.email, Validators.required]],
			password: ['', [Validators.required, Validators.minLength(8)]]
		});
		this.signin = frmBldr.group({
			nome: ['', [Validators.required]],
			cognome: ['', [Validators.required]],
			email: ['', [Validators.email, Validators.required]],
			password: ['', [Validators.required, Validators.minLength(8)]]
		});
	}
	Login(){

	}
	Signin(){
		
	}
	Back(){
		this.modalController.dismiss();
	}
}
