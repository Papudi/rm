import { Component } from '@angular/core';
// import { Storage } from '@ionic/storage';

import { ModalController, NavController, NavParams } from 'ionic-angular';
import { ProgramAddPage } from '../program-add/program-add';
import { ProgramDetailPage } from '../program-detail/program-detail';
import { Data } from '../../providers/data';

// import { Moment } from 'moment';


@Component({
  selector: 'page-myprograms',
  templateUrl: 'myprograms.html',
})
export class MyprogramsPage {

  public myprograms = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: Data) {
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


}
