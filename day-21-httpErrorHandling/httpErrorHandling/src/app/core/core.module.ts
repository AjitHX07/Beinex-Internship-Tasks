import { NgModule } from '@angular/core';

import { AccountComponent } from './account/account.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
