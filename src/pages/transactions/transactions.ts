import { Component } from '@angular/core';
// import { Storage } from '@ionic/storage';

import { ModalController, NavController, NavParams } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data';
import { AlertController } from 'ionic-angular';
// import { removeArrayItem } from 'ionic-angular/util/util';

// import { Moment } from 'moment';


/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: Data, public alertCtrl: AlertController) {
    this.dataService.getTransactions().then((trans) => {
      if (trans) {
        this.items = JSON.parse(trans);
      }
    });
  } 

  ionViewDidLoad() {
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item,
      items: this.items
    });
  }
  deleteItem(item) {

      let confirm = this.alertCtrl.create({
        title: 'Delete Transaction?',
        message: 'Do you really want to Delete this transaction?',
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
              this.items.splice(this.items.indexOf(item),1);
              this.dataService.save(this.items);
            }
          }
        ]
      });
      confirm.present();




    // this.items.splice(this.items.indexOf(item),1);
    // this.dataService.save(this.items);
  }


}
