import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './core/account/account.component';

const routes: Routes = [
  {
    path: "accounts",
    component: AccountComponent
  },
  {
    path: '',
    redirectTo: "accounts",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
