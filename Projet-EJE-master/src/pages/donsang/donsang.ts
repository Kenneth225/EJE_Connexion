import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuizhePage } from '../quizhe/quizhe';
import { QuizfePage } from '../quizfe/quizfe';

/**
 * Generated class for the DonsangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-donsang',
  templateUrl: 'donsang.html',
})
export class DonsangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  gotoQuizhe() {
    this.navCtrl.push(QuizhePage);
  }

  gotoQuizfe() {
    this.navCtrl.push(QuizfePage)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DonsangPage');
  }

}
