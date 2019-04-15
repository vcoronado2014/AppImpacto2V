import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, icon: string}>;
  
  constructor(public navCtrl: NavController,
    public navigation: Nav,
            platform: Platform,
            statusBar: StatusBar,
            splashScreen: SplashScreen) {
              var paginaUno = {title: 'Inicio', component: HomePage, visible: true, icon: 'home'};
              this.pages = [paginaUno];
  }
  openPage(pages) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(pages.component);
  }

}
