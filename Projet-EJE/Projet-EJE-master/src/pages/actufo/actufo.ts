import { Component } from '@angular/core';
import { NavController, NavParams , App} from 'ionic-angular';

@Component({
  selector: 'page-actufo',
  templateUrl: 'actufo.html',
})
export class ActufoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }
  
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActufoPage');
  }
*/

/* Methode de deconnexion */
logout() {
  const root = this.app.getRootNav();
  root.popToRoot();

}

/* next use of logout*/



}
