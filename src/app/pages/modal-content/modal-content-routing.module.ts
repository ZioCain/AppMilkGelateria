import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalContentPage } from './modal-content.page';

const routes: Routes = [
  {
    path: '',
    component: ModalContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalContentPageRoutingModule {}
