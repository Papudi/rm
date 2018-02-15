import { Component } from '@angular/core';
// import { Storage } from '@ionic/storage';

import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ProgramAddPage } from '../program-add/program-add';
import { ProgramDetailPage } from '../program-detail/program-detail';
import { Data } from '../../providers/data';
import { AlertController } from 'ionic-angular';

// import { Moment } from 'moment';


@Component({
  selector: 'page-myprograms',
  templateUrl: 'myprograms.html',
})
export class MyprogramsPage {

  public myprograms = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: Data, public alertCtrl: AlertController) {
    this.dataService.getMyprograms().then((progs) => {
      if (progs) {
        this.myprograms = JSON.parse(progs);
        console.log(this.myprograms);
      }
    });
  } 

  ionViewDidLoad() {
  }

  addMyprogram() {
    let addModal = this.modalCtrl.create(ProgramAddPage);
    addModal.onDidDismiss((program) => {
      if (program) {
        this.saveMyprogram(program);
      }
    });
    addModal.present();
  }

  saveMyprogram(program) {
    this.myprograms.push(program);
    this.dataService.saveMyprograms(this.myprograms);
    console.log("saving data -"+program.name);
  }

  viewProgramDetail(program) {
    this.navCtrl.push(ProgramDetailPage, {
      program: program,
      myprograms: this.myprograms
    });
  }
  deleteItem(item) {
console.log(item);
    let confirm = this.alertCtrl.create({
      title: 'Delete Program?',
      message: 'Do you really want to Delete this Program?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.myprograms.splice(this.myprograms.indexOf(item),1);
            this.dataService.saveMyprograms(this.myprograms);
          }
        }
      ]
    });
    confirm.present();




  // this.items.splice(this.items.indexOf(item),1);
  // this.dataService.save(this.items);
}

}
