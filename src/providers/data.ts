import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  masterprograms: any;
  mastercategories: any;
  masterprofile: any;

  constructor(public storage: Storage) {
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

    // this.masterprofile = [
    //   { name: 'dob' }
    // ]
    
  }

  filteredPrograms(searchTerm) {
    console.log(this.masterprograms);
    return this.masterprograms;
    // return this.masterprograms.filter((item) => {
    //   return masterprograms.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    // });
  }

  // GET and SAVE Programs in myprograms collection

  getMyprograms() {
    return this.storage.get('myprograms');
  }

  getMyprogramsSummary() {
    // let myProgs = this.storage.get('myprograms');
    // let trans = this.storage.get('trans');
  }

  saveMyprograms(programsData) {
    let newPrograms = JSON.stringify(programsData);
    this.storage.set('myprograms', newPrograms);
  }

  // GET and SAVE Transactions in trans table

  getTransactions() {
    return this.storage.get('trans');
  }

  save(data) {
    let newData = JSON.stringify(data);
    this.storage.set('trans', newData);
  }

  getProfile() {
    return this.storage.get('myprofile');
  }

  myprofile(data) {
    let newData = JSON.stringify(data);
    this.storage.set('myprofile', newData);
  }
  


}