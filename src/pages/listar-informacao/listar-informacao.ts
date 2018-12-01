import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InformacaoProvider } from '../../providers/informacoes/informacoes';
import { Informacao } from '../../models/informacao';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-listar-denuncias',
  templateUrl: 'listar-informacao.html',
})
export class ListarDenunciasPage {
  imgFoto: string;
  denuncias: Observable<Informacao[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private informacaoProvider:InformacaoProvider) {
  }
  getFoto(image: string){
    return this.informacaoProvider.getFoto(image);
}

  ionViewDidLoad() {
    this.denuncias = this.informacaoProvider.pegarDenuncias(true);

  }

}
