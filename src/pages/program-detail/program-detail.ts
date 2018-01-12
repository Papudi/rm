import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-program-detail',
  templateUrl: 'program-detail.html',
})
export class ProgramDetailPage {
  
  program;
  expdate;
  created;
  items;
  itemsfilt;
  totalpoints;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.program = this.navParams.get('item').program;
    this.expdate = this.navParams.get('item').expdate;
    this.created = this.navParams.get('item').created;

    this.items = this.navParams.get('items');

    this.itemsfilt = this.items.filter(item => item.program == this.program);
    this.totalpoints = this.itemsfilt.reduce((total,prog) => total + Number(prog.points), 0 );

    console.log(this.totalpoints);
  }

}
