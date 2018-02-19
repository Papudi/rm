import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
// import { AddItemPage } from '../add-item/add-item';
import { TransactionsPage } from '../transactions/transactions';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ProgtransDetailPage } from '../progtrans-detail/progtrans-detail';
import { MyprogramsPage } from '../myprograms/myprograms';
import { Data } from '../../providers/data';
import { RegistrationPage } from '../registration/registration';
import { AboutPage } from '../about/about';
import { ProfileEditPage } from '../profile-edit/profile-edit';

import 'rxjs/add/operator/filter';
// import { KnowyoumorePage } from '../knowyoumore/knowyoumore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any;
  // itemsfilt: any;
  // myprogpts: any;
  // myprogsfilt: any;
  name: any;
  prog: any;

  public myprogs = [];

  slides = [
    {
      title: "Rewards Multiplier",
      description: "never miss another reward",
      image: "assets/imgs/Banner1.jpg",
    },
    {
      title: "",
      description: "",
      image: "assets/imgs/Banner2.jpg",
    },
  ];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

    this.dataService.getTransactions().then((trans) => {
      if (trans) {
        this.items = JSON.parse(trans);
        this.items = this.items.reverse();
      }
    });

    this.dataService.getMyprograms().then((myprograms) => {
      if (myprograms) {
        this.myprogs = JSON.parse(myprograms);
        // console.log(this.myprogs);
        for (let progs of this.myprogs) {
          // this.myprogs.push({'totalpts' : 10});
          // this.totalpoints = this.itemsfilt.reduce((total, prog) => total + Number(prog.points), 0);
        }
      }
    });

  }

  // Intro Overlays

  ionViewDidLoad() {
    document.getElementById("help1").style.display="none";
    document.getElementById("help2").style.display="none";
    document.getElementById("help3").style.display="none";  	
  }

  showHelp(){
    console.log("Help?")
    document.getElementById("help1").style.display="block";
  }

  myFunction1() {
    document.getElementById("help1").style.display="none";
    document.getElementById("help2").style.display="block";
    document.getElementById("help3").style.display="none";
  
  }

  myFunction2() {
  document.getElementById("help1").style.display="none";
  document.getElementById("help2").style.display="none";
  document.getElementById("help3").style.display="block";

} 

myFunction3() {
  document.getElementById("help1").style.display="none";
  document.getElementById("help2").style.display="none";
  document.getElementById("help3").style.display="none";

}


  // Navigation Buttons

  gotoMyprograms() {
    this.navCtrl.setRoot(MyprogramsPage);
  }

  gotoTrans() {
    this.navCtrl.setRoot(TransactionsPage);
  }

  gotoAbout(){
    this.navCtrl.setRoot(AboutPage);
  }

  gotoRegistration(){
    this.navCtrl.setRoot(RegistrationPage);
  }

  gotoProfile(){
    this.navCtrl.setRoot(ProfileEditPage);
  }

  // gotoKnowyoumore(){
  //   this.navCtrl.setRoot(KnowyoumorePage);
  // }
  
  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item,
      items: this.items
    });
  }

  viewProg(prog) {
    // console.log(prog);
    let item = this.items.filter(element => element.program == prog.name);
    this.navCtrl.push(ProgtransDetailPage, {
      prog: prog,
      item: item,
    });
  }


}
