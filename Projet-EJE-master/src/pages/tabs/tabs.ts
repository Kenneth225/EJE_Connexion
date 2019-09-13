import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DonsangPage } from '../donsang/donsang';
import { DevdonneurPage } from '../devdonneur/devdonneur';
import { ActufoPage } from '../actufo/actufo';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;
  tab2: any;

  donsang = DonsangPage;
  devdonneur = DevdonneurPage;
  actufo = ActufoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /*this.actufo = tab1;
    this.devdonneur = tab2;*/

  }

  /* 
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  */
}
