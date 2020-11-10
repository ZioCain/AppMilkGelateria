import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardPage } from './card.page';

import { CardPageRoutingModule } from './card-routing.module';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { MustLoginComponent } from '../must-login/must-login.component';

import { SharedComponentsModule } from '../components/shared-components.module';
import { ModalContentPageModule } from '../pages/modal-content/modal-content.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: CardPage }]),
		CardPageRoutingModule,
		NgxQRCodeModule,
		SharedComponentsModule,
		ModalContentPageModule,
	],
	declarations: [CardPage, MustLoginComponent]
})
export class CardPageModule {}
