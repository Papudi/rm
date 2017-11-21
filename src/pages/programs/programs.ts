import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';

/**
 * Generated class for the ProgramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {


  progs: Array<{name: string, category: string, icon: string}>;  

  // public progs = [
  //   {name:"Payback",category:"Aggregators"},
  //   {name:"Make My Trip",category:"Travel"},
  //   {name:"GoIbibo",category:"Travel"},
  //   {name:"Clear Trip",category:"Travel"},
  // ];

  // public categories = [];

  // public items = [];
  
  //   constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public dataService: Data) {
  
    //   this.dataService.getData().then((todos) => {
  
    //     if (todos) {
    //       this.items = JSON.parse(todos);
    //     }
  
    //   });
  
    // }

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
    // this.dataService.getData().then((programs) => {
    //         if (programs) {
    //           this.progs = JSON.parse(programs);
    //         }
    //       });    

    this.progs = [
      {name:"Payback",category:"Aggregators", icon:"leaf"},
      {name:"Make My Trip",category:"Travel", icon:"plane"},
      {name:"GoIbibo",category:"Travel", icon:"plane"},
      {name:"Clear Trip",category:"Travel", icon:"plane"}  
    ];

  }

  

    // addItem() {
    //   let addModal = this.modalCtrl.create(AddItemPage);
    //   addModal.onDidDismiss((item) => {
    //     if (item) {
    //       this.saveItem(item);
    //     }
    //   });
    //   addModal.present();
    // }
  
    // saveItem(item) {
    //   this.items.push(item);
    //   this.dataService.save(this.items);
    // }
  
    // viewItem(item) {
    //   this.navCtrl.push(ItemDetailPage, {
    //     item: item
    //   });
    // }
  
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');
  }

}
