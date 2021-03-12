import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';




//App.component é o controaldor da pagina app.html

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //Estou declarando as minhas paginas usando o nome da classe porem na forma de string
  rootPage: string = 'HomePage';//rootPage vai me informar qual a clase inicial do meu aplicativo

  pages: Array<{title: string, component: string}>;

  constructor(
      public platform: Platform,
      public statusBar: StatusBar,
      public splashScreen: SplashScreen,
      public auth: AuthService
      ) {

        this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [ //Lista de itens do menu
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Categorias', component: 'CategoriasPage' },
      { title: 'Carrinho', component: 'CartPage'},
      { title: 'Logout', component: ''}
     ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  openPage(page : {title:string, component:string}) {

     switch (page.title) {
      case 'Logout':
      this.auth.logout();
      this.nav.setRoot('HomePage');//Quando fizer o logout irei direcionar para a pagina Home
      break;

      default:
      this.nav.setRoot(page.component);
    }
  }
}
