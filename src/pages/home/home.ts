import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
// import { AddItemPage } from '../add-item/add-item';
import { TransactionsPage } from '../transactions/transactions';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data';
import { MyprogramsPage } from '../myprograms/myprograms';

import 'rxjs/add/operator/filter';

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

  public myprogs = [];

  slides = [
    {
      title: "Rewards Multiplier",
      description: "never miss another reward",
      image: "assets/imgs/Banner.jpg",
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
      }
    });

  }

  // Navigation Buttons

  gotoMyprograms() {
    this.navCtrl.setRoot(MyprogramsPage);
  }

  gotoTrans() {
    this.navCtrl.setRoot(TransactionsPage);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item,
      items: this.items
    });
  }

  viewProgSummary(prog) {
    // this.navCtrl.push(ProgSummaryPage, {
    //   prog: prog,
    //   transacts: this.items
    // });
  }


}
