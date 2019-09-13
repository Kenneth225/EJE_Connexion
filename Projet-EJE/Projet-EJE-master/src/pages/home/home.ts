import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { InscripPage } from '../inscrip/inscrip';
import { Storage } from '@ionic/storage';
//import { ActufoPage } from '../actufo/actufo';
import { TabsPage } from '../tabs/tabs';
import { PostProviders } from '../../providers/post-providers';

 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Email: string;
  Password: string;
  constructor (public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController, private postPvdr: PostProviders,
    public storage: Storage) {

  }

/* methode appelant la page inscrip*/
  onGotoinscription(){
    this.navCtrl.push(InscripPage);
  }

/* méthode pour la connexion*/
  login() {
    if(this.Email != "" && this.Password != ""){

      let body = {
        Email: this.Email,
        Password: this.Password,
        aski: 'connect'
      };
    
      this.postPvdr.postData(body, 'file_rek.php').subscribe((data)=>
      {
          var alertpesan = data.msg;
          if(data.success){
            this.storage.set('session_storage', data.result);
            this.navCtrl.setRoot(TabsPage);
            const toast = this.toastCtrl.create({
              message: 'connexion effectué',
              duration: 3000
            });
            toast.present();
          }else{
            const toast = this.toastCtrl.create({
              message: alertpesan,
              duration: 3000
            });
            toast.present();
          }
      });
    }else {
      const toast = this.toastCtrl.create({
        message: 'Email ou Mot de Passe erroné',
        duration: 3000
      });
      toast.present();
    }
    
  }


}
 
 
  