import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({//@Component éo que faz ser o controlador da minha view
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
//no Typescript todo elemento de uma classe, metodo ou objeto tem que ser preecendido do this.navCtrl
login() {
  this.navCtrl.setRoot('CategoriasPage');

  }

}
