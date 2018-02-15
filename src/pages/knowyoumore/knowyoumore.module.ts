import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KnowyoumorePage } from './knowyoumore';

@NgModule({
  declarations: [
    KnowyoumorePage,
  ],
  imports: [
    IonicPageModule.forChild(KnowyoumorePage),
  ],
})
export class KnowyoumorePageModule {}
