import { Component } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { ModalBaseComponent } from '../components/modal-base/modal-base.component';
import { ModalContentPage } from '../pages/modal-content/modal-content.page';

@Component({
	selector: 'app-must-login',
	templateUrl: './must-login.component.html',
	styleUrls: ['./must-login.component.scss'],
})
export class MustLoginComponent{
	constructor(
		private modalController: ModalController,
		private routerOutlet: IonRouterOutlet
	){}
	async PresentLogin() {
		const modal = await this.modalController.create({
			presentingElement: this.routerOutlet.nativeEl,
			component: ModalBaseComponent,
			componentProps: {
				rootPage: ModalContentPage,
			},
		});

		await modal.present();
	}
}
