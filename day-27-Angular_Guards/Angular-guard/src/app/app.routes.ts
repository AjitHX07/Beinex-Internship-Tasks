import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { FormComponent } from './components/form/form.component';
import { formDeactivateGuard } from './guards/form.guard';

export const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard, adminGuard]
},
{
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [authGuard]
},
{
    path: 'form',
    component: FormComponent,
    canActivate: [authGuard],
    canDeactivate: [formDeactivateGuard]
}
];