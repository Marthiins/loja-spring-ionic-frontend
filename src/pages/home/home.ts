import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';


@IonicPage()
@Component({//@Component éo que faz ser o controlador da minha view
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  //Pagina de evento do IONIC  https://ionicframework.com/docs/v3/api/navigation/NavController/
  ionViewWillEnter() { //Desabilitar o menu quando entrar na pagina
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() { //Habilitar o menu quando entrar na pagina
    this.menu.swipeEnable(true);
  }

//no Typescript todo elemento de uma classe, metodo ou objeto tem que ser preecendido do this.navCtrl
login() {
  this.navCtrl.setRoot('CategoriasPage');

  }

}
