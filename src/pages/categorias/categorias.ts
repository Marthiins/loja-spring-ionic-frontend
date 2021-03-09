import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriaService } from '../../services/domain/categoria.service';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


//chamar metodo do serviço para testar se estão chamando pela API

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

   items: CategoriaDTO[]; //Variavel iten

  constructor
  (public navCtrl: NavController,
     public navParams: NavParams,
     public categoriaSevice: CategoriaService) {
  }

  ionViewDidLoad() {

    //importante esse console.log
    this.categoriaSevice.findAll()//Chamada assincrona no angula tem que colocar o  .subscribe e colocar uma função anônima coloco o argumento e abre e fecha {}
      .subscribe(response => {
        this.items = response;
      },
      error => { });
    }

}
