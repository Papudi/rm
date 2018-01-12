import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Data } from '../../providers/data';
// import { DateTime } from 'ionic-angular/components/datetime/datetime';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-program-add',
  templateUrl: 'program-add.html',
})
export class ProgramAddPage {

  masterprograms: any;
  mastercategories: any;
  searchTerm: string = '';

  name: string; // Name of the program
  nametemp: string; // Name of the program
  category: string; // Category of the program
  stdvalidity: string; // Standard Validity of the points
  membershipid: string; // Standard Validity of the points

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: Data) {

    this.masterprograms = [
      { name: 'MakeMyTrip', category: 'Travel', stdvalidity: 365 },
      { name: 'Trivago', category: 'Travel', stdvalidity: 365 },
      { name: 'PayBack', category: 'Retails', stdvalidity: 365 },
      { name: 'Landmark', category: 'Retail', stdvalidity: 365 },
      { name: 'American Express', category: 'Bank / Card', stdvalidity: 365 },
      { name: 'Indigo Airlines', category: 'Airlines', stdvalidity: 365 },
      { name: 'Emirates', category: 'Airlines', stdvalidity: 365 },
      { name: 'ICICI Bank', category: 'Bank / Card', stdvalidity: 365 },
      { name: 'Other', category: '', stdvalidity: 365 },
    ]

    this.mastercategories = [
      { name: 'Airlines' },
      { name: 'Apparel' },
      { name: 'Dining' },
      { name: 'Hotel' },
      { name: 'Online Portal' },
      { name: 'Travel' },
      { name: 'Shopping / Retail' },
      { name: 'Aggregator' },
      { name: 'Others' },
    ]

  }

  ionViewDidLoad() {
    // this.masterprograms = this.dataService.filteredPrograms(this.searchTerm);
    console.log(this.masterprograms);
  }

  saveProgram() {
    console.log(this.name, this.nametemp, this.category, this.stdvalidity, this.membershipid);
    var newItem: any;
    if (this.nametemp == 'Other') {
      newItem = {
        name: this.name,
        category: this.category,
        stdvalidity: this.stdvalidity,
        membershipid: this.membershipid,
        // created : new Date()
      };
    } else {
      newItem = {
        name: this.nametemp,
        category: this.category,
        stdvalidity: this.stdvalidity,
        membershipid: this.membershipid,
      }
    }
    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddItemPage');
  // }

}
