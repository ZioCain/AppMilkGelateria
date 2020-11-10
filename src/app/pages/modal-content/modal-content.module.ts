import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContentPageRoutingModule } from './modal-content-routing.module';

import { ModalContentPage } from './modal-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	ReactiveFormsModule,
    IonicModule,
    ModalContentPageRoutingModule
  ],
  declarations: [ModalContentPage]
})
export class ModalContentPageModule {}
