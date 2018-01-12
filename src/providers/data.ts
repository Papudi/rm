import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  masterprograms: any;
  mastercategories: any;

  constructor(public storage: Storage) {
    this.masterprograms = [
      { name: 'MakeMyTrip', category: 'Travel', stdvalidity: 365 },
      { name: 'Trivago', category: 'Travel', stdvalidity: 365 },
      { name: 'PayBack', category: 'Shopping / Retail', stdvalidity: 365 },
      { name: 'Landmark', category: 'Shopping / Retail', stdvalidity: 365 },
      { name: 'American Express', category: 'Bank / Card', stdvalidity: 365 },
      { name: 'Indigo Airlines', category: 'Airlines', stdvalidity: 365 },
      { name: 'Emirates', category: 'Airlines', stdvalidity: 365 },
      { name: 'ICICI Bank', category: 'Bank / Card', stdvalidity: 365 },
      { name: 'Other', category: '', stdvalidity: 365 },      
    ]
    this.mastercategories = [
      { name: 'Airlines'},
      { name: 'Apparel'},
      { name: 'Bank / Card'},
      { name: 'Dining'},
      { name: 'Hotel'},
      { name: 'Online Portal'},
      { name: 'Travel'},
      { name: 'Shopping / Retail'},
      { name: 'Aggregator'},
      { name: 'Others'},
    ]
  }

  filteredPrograms(searchTerm) {
    console.log(this.masterprograms);
    return this.masterprograms;
    // return this.masterprograms.filter((item) => {
    //   return masterprograms.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    // });
  }

  // GET and SAVE Transactions in trans table

  getMyprograms() {
    return this.storage.get('myprograms');
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

}