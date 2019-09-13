import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProviders } from '../../providers/post-providers';



@IonicPage()
@Component({
  selector: 'page-inscrip',
  templateUrl: 'inscrip.html',
})
export class InscripPage implements OnInit {
  Statut: string = "";
  Nom: string = "";
  Prenoms: string = "";
  Datnais: string = "";
  Email: string = "";
  Password: string = "";
  remdp: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private postPvdr: PostProviders) {
  
  }

  ngOnInit(){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InscriptionPage');
  }
  Ajouter(){
    console.log(this.Nom);
    if(this.Statut == ""){
        const toast = this.toastCtrl.create({
          message: 'Le Statut est requis',
          duration: 3000
        });
        toast.present();
    }else if(this.Nom == ""){
      const toast = this.toastCtrl.create({
        message: 'Le nom est requis',
        duration: 3000
      });
      toast.present();
    }else if(this.Prenoms == ""){
      const toast = this.toastCtrl.create({
        message: 'Le prenom est requis',
        duration: 3000
      });
      toast.present();
    }
    else if(this.Datnais == ""){
      const toast = this.toastCtrl.create({
        message: 'La date est requise',
        duration: 3000
      });
      toast.present();
    }
    else if(this.Email == ""){
      const toast = this.toastCtrl.create({
        message: 'Le mail est requis',
        duration: 3000
      });
      toast.present();
    }else if(this.Password == ""){
      const toast = this.toastCtrl.create({
        message: 'Le mot de Passe est requis',
        duration: 3000
      });
      toast.present();
    }else if(this.Password != this.remdp){
      const toast = this.toastCtrl.create({
        message: 'Erreur de correspondance du Mot de Passe',
        duration: 3000
      });
      toast.present();

    }else{
      //insertion dans la bdd

      let body = {
        Statut: this.Statut,
        Nom: this.Nom,
        Prenoms: this.Prenoms,
        Datnais: this.Datnais,
        Email: this.Email,
        Password: this.Password,
        remdp: this.remdp,
        aski: 'ajout_etudiant'
      };

      this.postPvdr.postData(body, 'file_rek.php').subscribe((data)=>
      {
          var alertpesan = data.msg;
          if(data.success){
            this.navCtrl.pop();
            const toast = this.toastCtrl.create({
              message: 'Enregistrement effectué',
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


    }
  }




}
