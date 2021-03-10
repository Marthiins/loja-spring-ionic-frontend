import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';


@IonicPage()
@Component({//@Component éo que faz ser o controlador da minha view
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

creds : CredenciaisDTO = { //Declaração do atributo e iniciar com o objeto vazio

  email: "",
  senha: ""
};


  constructor( public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }

  //Pagina de evento do IONIC  https://ionicframework.com/docs/v3/api/navigation/NavController/
  ionViewWillEnter() { //Desabilitar o menu quando entrar na pagina
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() { //Habilitar o menu quando entrar na pagina
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
  }

//no Typescript todo elemento de uma classe, metodo ou objeto tem que ser preecendido do this.navCtrl
login() {
  this.auth.authenticate(this.creds)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});
  }

  signup() {
    //console.log("passou")
    this.navCtrl.push('SignupPage'); //nome da classe
  }

}
