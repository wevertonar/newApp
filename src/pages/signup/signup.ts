import { Component } from '@angular/core';

// Nesse import adicionamos o AlertController que será usado para apresentar a mensagem do nosso aplicativo
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// Importação do nosso modelo de usuário
import { User } from '../../models/user';

// Importação do nosso serviço de autenticação
import { AuthProvider } from '../../providers/auth/auth';

// Importação da página que o usuário será redirecionado após o login
import { TabsPage } from '../tabs/tabs';
import { Validators, FormBuilder } from '@angular/forms';
import { AppUsersProvider } from '../../providers/app-users/app-users';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  // Definindo o nosso atributo usuário do tipo User
  public user = {} as User;

  // Aqui no contrutor vamos adicionar o AuthProvider e o AlertController
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private auth: AuthProvider, private alertCtrl: AlertController,
              private formBuilder: FormBuilder,private appUser: AppUsersProvider
  ) { }


  // Método para exibir as nossas mensagens de erro.
  alert(title, message) {
    let al = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Fechar']
    });
    al.present();
  }

  async signup(user: User) {

    // Valida se foi informado email e password
    if(user.email == "" || user.password == "")
    {  
      this.alert('Erro', 'É necessário informar o email e senha');
    } else {
      try {

        // Chama o método para cadastrar usuários

        const result = await this.auth.register(user);
        if (result) {
          // Se ocorrer tudo bem redireciona para a página tabs 
          user.password = " ";
          user.app=true;
          this.appUser.adicionar(user);
          this.navCtrl.setRoot(TabsPage);
        }
      } catch (e) {
        this.alert('Erro ao cadastrar', e.message);
      }
    }
  }

  ionViewDidLoad() {
    // Toda vez que um usuário acessar a página de login ele será deslogado
    this.auth.logout();
  }

}