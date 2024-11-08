import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhonesComponent } from './phones/phones.component';
import { DressComponent } from './dress/dress.component';
import { ShoesComponent } from './shoes/shoes.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomersModule } from './customers/customers.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    HomeModule,
    // RouterLink,
    // RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
