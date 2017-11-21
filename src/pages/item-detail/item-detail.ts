import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  program;
  points;
  expdate;
  created;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.program = this.navParams.get('item').program;
    this.points = this.navParams.get('item').points;
    this.expdate = this.navParams.get('item').expdata;
    this.created = this.navParams.get('item').created;

    console.log(this.expdate);
  }

}
