import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google: any;
// Serviço de autenticação que será usado para fazer o logout
import { AuthProvider } from '../../providers/auth/auth'
import { DenunciarPage } from '../informacao/informacao';
// Página de login, para onde o usuário que fizer logout sera direcionado
import { Welcome } from '../welcome/welcome';
import { AppUsersProvider } from '../../providers/app-users/app-users';
import { Observable } from 'rxjs/Observable';
import { AppUsers } from '../../models/app-users';

@Component({selector: 'page-home', templateUrl: 'home.html'})

export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  appUsers: Observable<AppUsers[]>;
  map: any;

  markers = [];
  constructor(public navCtrl: NavController,
    public platform: Platform, private geolocation: Geolocation,
    private auth: AuthProvider,
    private appUserProvider:AppUsersProvider) {
    platform.ready().then(() => {
      this.initMap();
    });
  }

  initMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then((resp) => {
      let mylocation = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 15,
        center: mylocation
      });
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.deleteMarkers();
      let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
      let image = 'assets/imgs/location.png';
      this.addMarker(updatelocation,image);
      this.setMapOnAll(this.map);
    });
  }

addMarker(location, image) {
  let marker = new google.maps.Marker({
    position: location,
    map: this.map,
    icon: image
  });
  this.markers.push(marker);
}

setMapOnAll(map) {
  for (var i = 0; i < this.markers.length; i++) {
    this.markers[i].setMap(map);
  }
}

clearMarkers() {
  this.setMapOnAll(null);
}

deleteMarkers() {
  this.clearMarkers();
  this.markers = [];
}
adicionar () {
  this.navCtrl.push(DenunciarPage);
}
  sair() {
    this.auth.logout().then(value => {
      this.navCtrl.setRoot(Welcome);
     });
  }
  ionViewDidLoad() {
    this.appUsers = this.appUserProvider.pegarUser(true);

  }

}
