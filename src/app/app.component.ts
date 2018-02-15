import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

// import { ListPage } from '../pages/list/list';
import { TransactionsPage } from '../pages/transactions/transactions';
import { MyprogramsPage } from '../pages/myprograms/myprograms';
import { AboutPage } from '../pages/about/about';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileDetailPage } from '../pages/profile-detail/profile-detail';
// import { KnowyoumorePage } from '../pages/knowyoumore/knowyoumore';
// import { ProgramsPage } from '../pages/programs/programs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Programs', component: MyprogramsPage },
      // { title: 'Programs', component: ProgramsPage },
      { title: 'My Transactions', component: TransactionsPage },
      { title: 'About', component: AboutPage },
      { title: 'Registration', component: RegistrationPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Profile Details', component: ProfileDetailPage }      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
