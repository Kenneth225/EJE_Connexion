import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


/**
 * Generated class for the QuizhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quizhe',
  templateUrl: 'quizhe.html',
})
export class QuizhePage {

 permission : boolean;
 statut: true;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
    private alertCtrl: AlertController )  {
  }

 /* ionViewDidLoad() {
    console.log('ionViewDidLoad QuizhePage');
  }
  */

  nextcnt() {
    
    console.log('merci bingo');

  }

  nteligible() {
    let alert = this.alertCtrl.create ({
      title:'Désolé !',
      message: 'Vous remplissez pas toutes les conditions requises pour un don de sang',

    });
    alert.present();

  }
}

