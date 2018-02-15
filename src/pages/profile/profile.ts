import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { Data } from '../../providers/data';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  mastergender: any;

  myFirstname: string;
  myLastname: string;
  myEmail: string;
  myPhone: string;
  myDate: string;
  myGender: string;

  public myProfile = [];
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: Data, public storage: Storage) {
      this.mastergender = [
      { name: 'Male'},
      { name: 'Female'},
      { name: 'Others'}
    ]

    this.dataService.getProfile().then((profile) => {
      if (profile) {
        this.myProfile = JSON.parse(profile);
        console.log(this.myProfile);
      }
    });
  }
 
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  saveProfile(){
    console.log('First Name: '+this.myFirstname+'\n'+'Last Name: '+this.myLastname+'\n'+'Email: '+this.myEmail+'\n' +'Mobile Number'+this.myPhone +'\n'+'DOB: '+ this.myDate +'\n'+ 'Gender: ' + this.myGender);
    var profile: any;
    profile={
      myFirstname:this.myFirstname,
      myLastname:this.myLastname,
      myEmail:this.myEmail,
      myPhone:this.myPhone,
      myDate:this.myDate,
      myGender:this.myGender
    }
    this.myProfile.push(profile);
    this.dataService.myprofile(this.myProfile);
    this.navCtrl.push(HomePage);
  }
  getProfile() {
    this.storage.get('myFirstname').then((myFirstname) => {
      console.log('Your name is', myFirstname);
    });
  };
}


