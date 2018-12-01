import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import firebase from 'firebase';
// Importações necessárias

// Importação do serviço de tarefas
import { InformacaoProvider } from '../../providers/informacoes/informacoes';

// Importação do modelo de tarefas
import { Informacao} from '../../models/informacao'

// Importação da página tabs que o usuário será direcionado
// ao finalizar a edição de uma tarefa
import { TabsPage } from '../tabs/tabs';
import { ListarDenunciasPage } from '../listar-informacao/listar-informacao';
//geo
import { Geolocation } from '@ionic-native/geolocation';
declare var google: any;
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthProvider } from '../../providers/auth/auth';
@IonicPage()
@Component({
  selector: 'page-denunciar',
  templateUrl: 'informacao.html',
})
export class DenunciarPage {
  map2: any;
  longitudeFinal: any;
  latitudeFinal: any;
  @ViewChild('map2') mapElement: ElementRef;
  captureDataUrl: string;
  siteUrl: string;
  // Definição do atributo tarefa que será usado para o cadastro
  public denuncia = {} as Informacao;

  // Adicionando o serviço de tarefa no construtor
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private informacaoProvider:InformacaoProvider,
              public alertCtrl: AlertController,
              public platform: Platform,
              private geolocation: Geolocation,
              private camera: Camera,
              private auth: AuthProvider) {
                this.alertCtrl = alertCtrl;
                platform.ready().then(() => {
                  this.iniciarMapa();
                });
  }
  iniciarMapa() {
    this.geolocation.getCurrentPosition().then((position)=> {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // pegando localização atual

      let mapOptions = { //opções do mapa
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disabledZoomDoubleClick: true,
        fullscreenControl: true
      }
      this.map2 = new google.maps.Map(document.getElementById('map2'), mapOptions); //adicionando mapa com as opçoes

      let marker = new google.maps.Marker({ //Adicionando marcador
      map: this.map2,
      animation: google.maps.Animation.DROP,
      position: latLng,
      draggable: true,

    });

    google.maps.event.addListener(marker, 'dragend', () => {
      this.latitudeFinal= marker.position.lat();
      this.longitudeFinal = marker.position.lng();
      console.log(this.latitudeFinal+''+''+this.longitudeFinal)
    })

    }, (error) => {
      console.log(error);
    });
}

  capture() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
/*
  upload() {
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`imagesDenuncias/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      this.showSuccesfulUploadAlert();
    });

  } */

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'Denúncia Enviada!',
      subTitle: 'Aguarde andamento no app',
      buttons: ['FECHAR']
    });
    alert.present();

    // clear the previous photo data in the variable
    this.navCtrl.setRoot(ListarDenunciasPage);
    this.captureDataUrl = "";
  }

  // Método que será usado para adicionar uma tarefa
  adicionarDenuncia(denuncia: Informacao) {
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 1000);
    denuncia.id=filename;
    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`imagesDenuncias/${denuncia.id}.jpg`);
  //emviar imagem para o firabase
    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {

      // testar colocar id da denuncia como filename, assim eh possivel criar a rota para pegar a imagem
      // imagesDenuncias/denuncia.id.jpg`

      var url = `imagesDenuncias/${denuncia.id}.jpg`;

   //cria a url da imagem para download
      firebase.storage().ref().child(url).getDownloadURL().then(url => {
        console.log("log1: " + url);

          //denuncia.id=id;
          var data = new Date();
          var dia = data.getDate();
          var diaReal;
          if (dia < 10) {
            diaReal = "0" + dia;
        }else diaReal = dia;
          var mes = data.getMonth() + 1;
         var mesReal;
          if(mes < 10) {
             mesReal = "0" + mes;
         }else mesReal = mes;
         var ano = data.getFullYear();

          denuncia.dataEnvio =  diaReal+"/"+mesReal+"/"+ano+"";

          denuncia.latitudeDenunciado = this.latitudeFinal;
          denuncia.longitudeDenunciado = this.longitudeFinal;
          denuncia.status='Aberta';
          denuncia.fotoDenuncia=url;
          denuncia.app=true;
          //this.informacaoProvider.getFoto( denuncia.fotoDenuncia);
         this.informacaoProvider.adicionar(denuncia);
         this.showSuccesfulUploadAlert();
         console.log(denuncia.dataEnvio);
      });


    });


  }
  getFoto(image: string, denuncia: Informacao, id: number){
    let imgUrl: string;


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarTarefaPage');
  }

}
