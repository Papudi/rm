import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

// import {MomentModule} from 'angular2-moment';
// import * as moment from 'moment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
// import { LoginPage } from '../pages/login/login';
import { MyprogramsPage } from '../pages/myprograms/myprograms';
import { ProgramAddPage } from '../pages/program-add/program-add';
import { ProgramDetailPage } from '../pages/program-detail/program-detail';
// import { ProgramsPage } from '../pages/programs/programs';
import { TransactionsPage } from '../pages/transactions/transactions';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ProgtransDetailPage } from '../pages/progtrans-detail/progtrans-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { ProfileDetailPage } from '../pages/profile-detail/profile-detail';

import { Data } from '../providers/data';
import { AuthProvider } from '../providers/auth/auth';
import { EventProvider } from '../providers/event/event';
import { ProfileProvider } from '../providers/profile/profile';
// import { KnowyoumorePage } from '../pages/knowyoumore/knowyoumore';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    // ProfilePage,
    // LoginPage,
    MyprogramsPage,
    ProgramAddPage,
    ProgramDetailPage,
    // ProgramsPage,
    TransactionsPage,
    AddItemPage,
    ItemDetailPage,
    ProgtransDetailPage,
    AboutPage,
    RegistrationPage,
    ProfileEditPage,
    ProfileDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    // MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // LoginPage,
    ListPage,
    MyprogramsPage,
    ProgramAddPage,
    ProgramDetailPage,
    // ProgramsPage,
    TransactionsPage,
    AddItemPage,
    ItemDetailPage,
    ProgtransDetailPage,
    AboutPage,
    RegistrationPage,
    ProfileEditPage,
    ProfileDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EventProvider,
    ProfileProvider
  ]
})
export class AppModule { }
