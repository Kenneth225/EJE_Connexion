import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, App } from 'ionic-angular';
/*import { HomePage } from '../home/home'; import a revoir */
/*import { ActufoPage } from '../actufo/actufo';*/
/*import { ActufoPage } from '../actufo/actufo';*/
/*import { TabsPage } from '../tabs/tabs';   peut etre utilisé en cas d use tabs page */


@Component({
  selector: 'page-devdonneur',
  templateUrl: 'devdonneur.html',
})

export class DevdonneurPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public app: App) {


  }
/* methode  en cliquant oui */
  msgoui() {
      let alert = this.alertCtrl.create ({
      title : 'Felicitation' ,
      message: 'Vous venez de rejoindre la famille des donneurs',
    });
    alert.present();
    /*ici suite instruction de la methode*/
    console.log('passer au mode donneur');
   /* instuction du log out a revoir en modelisant en poo*/
   const root = this.app.getRootNav();
  root.popToRoot();/* fin de l'instruction logout */
    /*
    session.close() -- methode
    */
  }

  msgnon() {
    const alert = this.alertCtrl.create({
      title: 'Oups',
      message: 'Merci de revenir quand vous voulez',
    });
    alert.present();
   /* this.navCtrl.;-------suite*/
  }
  

}
