import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DressComponent } from '../dress/dress.component';
import { ShoesComponent } from '../shoes/shoes.component';
import { PhonesComponent } from '../phones/phones.component';




@NgModule({
    declarations: [
        HomeComponent,
        DressComponent,
        PhonesComponent,
        ShoesComponent


    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        // RouterOutlet,
        // RouterLink

    ]
})
export class HomeModule { }
