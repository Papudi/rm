import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
// import { AddItemPage } from '../add-item/add-item';
import { TransactionsPage } from '../transactions/transactions';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // transPage = any;
  items: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.dataService.getTransactions().then((trans) => {
      if (trans) {
        this.items = JSON.parse(trans);
        this.items = this.items.reverse();
      }
    });
  }

  gotoTrans() {
    this.navCtrl.setRoot(TransactionsPage)
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }


}
