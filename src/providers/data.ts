import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class Data {

  constructor(public storage: Storage) {

  }

  getPrograms() {
    return this.storage.get('programs');
  }

  savePrograms(programsData) {
    let newPrograms = JSON.stringify(programsData);
    this.storage.set('programs', newPrograms);
  }

// GET and SAVE Transactions in trans table

  // getData() {
  //   return this.storage.get('trans');
  // }

  getTransactions() {
    return this.storage.get('trans');
  }

  save(data) {
    let newData = JSON.stringify(data);
    this.storage.set('trans', newData);

    // this.storage.set('todos', data);
  }

}