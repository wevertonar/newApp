import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarDenunciasPage } from './listar-informacao';

@NgModule({
  declarations: [
    ListarDenunciasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarDenunciasPage),
  ],
})
export class ListarDenunciasPageModule {}
