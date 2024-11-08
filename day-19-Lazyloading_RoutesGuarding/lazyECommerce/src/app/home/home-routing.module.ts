import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DressComponent } from '../dress/dress.component';
import { ShoesComponent } from '../shoes/shoes.component';
import { PhonesComponent } from '../phones/phones.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'dress', component: DressComponent },
            { path: 'shoes', component: ShoesComponent },
            { path: 'phones', component: PhonesComponent }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
