import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
// login
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
//Autenticação
// Importações para funcionamento do Firebase e da Autenticação
//import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Para usar o serviço de banco de dados é necessário importar o AngularFirestoreModule
import { AngularFirestoreModule } from 'angularfire2/firestore';


import { config } from '../config';

//geo
import { Geolocation } from '@ionic-native/geolocation';
//geo
//Photo
import { Camera } from '@ionic-native/camera';
//Photo
//Login

import { DenunciarPage } from '../pages/informacao/informacao';
import { ListarDenunciasPage } from '../pages/listar-informacao/listar-informacao';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AuthProvider } from '../providers/auth/auth';
import { InformacaoProvider } from '../providers/informacoes/informacoes';
import { AppUsersProvider } from '../providers/app-users/app-users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DenunciarPage,
    ListarDenunciasPage,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),

    // Configurações do Firebase
    AngularFireModule.initializeApp(config),
    // Configuração do serviço de autenticação do firebase
    AngularFireAuthModule,
    // Configuração do serviço de banco de dados do firebase
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DenunciarPage,
    ListarDenunciasPage,
    Welcome,
    Login,
    SignupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,//AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,Geolocation,
    InformacaoProvider,
    AppUsersProvider,Camera
  ]
})
export class AppModule {}
