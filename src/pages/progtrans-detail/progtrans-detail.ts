import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-progtrans-detail',
  templateUrl: 'progtrans-detail.html',
})
export class ProgtransDetailPage {

  prog;
  program;
  points;
  memid;
  // expdate;
  created;
  items;
  itemsfilt;
  totalpoints;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.program = this.navParams.get('prog').name;
    this.memid = this.navParams.get('prog').membershipid;
    // this.points = this.navParams.get('item').points;
    // this.expdate = this.navParams.get('item').expdate;
    // this.created = this.navParams.get('item').created;

    this.itemsfilt = this.navParams.get('item');

    this.prog = this.navParams.get('prog');

    // console.log(this.navParams.get('item'));
    // console.log(this.navParams.get('item'));
    // console.log(this.prog);

    // this.itemsfilt = this.items.filter(item => item.program == this.prog.name);
    this.totalpoints = this.itemsfilt.reduce((total, prog) => total + Number(prog.points), 0);

    // console.log(this.totalpoints);
  }

}
