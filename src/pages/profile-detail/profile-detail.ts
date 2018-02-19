import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileEditPage } from '../profile-edit/profile-edit';
import {} from '';

/**
 * Generated class for the ProfileDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-detail',
  templateUrl: 'profile-detail.html',
})
export class ProfileDetailPage {
myFirstname: string;
myLastname: string;
myEmail: string;
myPhone: string;
myDate: string;
myGender: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileDetailPage');
    // this.myFirstname = this.navParams.get('item').myFirstname;
  }


}
