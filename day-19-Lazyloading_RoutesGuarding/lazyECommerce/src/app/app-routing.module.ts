import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhonesComponent } from './phones/phones.component';
import { ShoesComponent } from './shoes/shoes.component';
import { DressComponent } from './dress/dress.component';

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
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'order', loadChildren: () => import('./order/order.module').then(o => o.OrderModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(c => c.CustomersModule) },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
