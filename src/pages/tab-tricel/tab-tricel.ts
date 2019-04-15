import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

//pages
import { ProyectosPage } from '../proyectos/proyectos';
import { TircelPage } from '../tircel/tircel';

/**
 * Generated class for the TabTricelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tab-tricel',
  templateUrl: 'tab-tricel.html',
})
export class TabTricelPage {
  tab1Root = ProyectosPage;
  tab2Root = TircelPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabTricelPage');
  }

}
