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
      { name: 'Jet Air', category: 'Travels', stdvalidity: 365 },
      { name: 'Air India', category: 'Travels', stdvalidity: 365 },
      { name: 'Vistara', category: 'Travels', stdvalidity: 365 },
      { name: 'SpiceJet', category: 'Travels', stdvalidity: 365 },
      { name: 'Air Asia', category: 'Travels', stdvalidity: 365 },
      { name: 'Taj', category: 'Hotels', stdvalidity: 365 },
      { name: 'Oberoi', category: 'Hotels', stdvalidity: 365 },
      { name: 'Mariotts', category: 'Hotels', stdvalidity: 365 },
      { name: 'Radisson', category: 'Hotels', stdvalidity: 365 },
      { name: 'Lemon Tree', category: 'Hotels', stdvalidity: 365 },
      { name: 'Club Carlson', category: 'Hotels', stdvalidity: 365 },
      { name: 'Paytm', category: 'DigitalWallets', stdvalidity: 365 },
      { name: 'Mobikwik', category: 'DigitalWallets', stdvalidity: 365 },
      { name: 'MakeMyTrip', category: 'Travels', stdvalidity: 365 },
      { name: 'Goibibo-GoCash', category: 'Travels', stdvalidity: 365 },
      { name: 'Yatra', category: 'Travels', stdvalidity: 365 },
      { name: 'ClearTrip', category: 'Travels', stdvalidity: 365 },
      { name: 'Flipkart', category: 'OnlineShops', stdvalidity: 365 },
      { name: 'Amazon', category: 'OnlineShops', stdvalidity: 365 },
      { name: 'Myntra', category: 'OnlineShops', stdvalidity: 365 },
      { name: 'Snapdeal', category: 'OnlineShops', stdvalidity: 365 },
      { name: 'Raymonds', category: 'Retail', stdvalidity: 365 },
      { name: 'ColourPlus', category: 'Retail', stdvalidity: 365 },
      { name: 'Pantaloons', category: 'Retail', stdvalidity: 365 },
      { name: 'ShopperStop-FCC', category: 'Retail', stdvalidity: 365 },
      { name: 'Bata', category: 'Retail', stdvalidity: 365 },
      { name: 'Tanishq-Anuttara', category: 'Retail', stdvalidity: 365 },
      { name: 'Titan-Signet', category: 'Retail', stdvalidity: 365 },
      { name: 'TitanEye-Vista', category: 'Retail', stdvalidity: 365 },
      { name: 'ICICI', category: 'DebitCards', stdvalidity: 365 },
      { name: 'HDFC', category: 'DebitCards', stdvalidity: 365 },
      { name: 'Standard Chartered', category: 'DebitCards', stdvalidity: 365 },
      { name: 'HSBC', category: 'DebitCards', stdvalidity: 365 },  
      { name: 'SBI', category: 'DebitCards', stdvalidity: 365 },
      { name: 'PNB', category: 'DebitCards', stdvalidity: 365 },
      { name: 'ICICI', category: 'CreditCards', stdvalidity: 365 },
      { name: 'HDFC', category: 'CreditCards', stdvalidity: 365 }, 
      { name: 'Standard Chartered', category: 'CreditCards', stdvalidity: 365 },
      { name: 'HSBC', category: 'CreditCards', stdvalidity: 365 },
      { name: 'Amex', category: 'CreditCards', stdvalidity: 365 },
      { name: 'SBI', category: 'CreditCards', stdvalidity: 365 }, 
      { name: 'PNB', category: 'CreditCards', stdvalidity: 365 },
      { name: 'PayBack', category: 'Aggregators', stdvalidity: 365 },
    ]

    this.mastercategories = [
      { name: 'Airlines'},
      { name: 'Hotels'},
      { name: 'DigitalWallets' },
      { name: 'Travels'},
      { name: 'OnlineShops'},
      { name: 'Retail'},
      { name: 'DebitCards'},
      { name: 'CreditCards'},
      { name: 'Aggregators'},
      { name: 'Others'},
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
