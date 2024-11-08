import { input } from '@angular/core';
import { Routes } from '@angular/router';
import { InputDataComponent } from './components/input-data/input-data.component';
import { OutputDataComponent } from './components/output-data/output-data.component';
import { UpdateDataComponent } from './components/update-data/update-data.component';

export const routes: Routes = [
    { path: 'post', component: InputDataComponent },
    { path: 'get', component: OutputDataComponent },
    { path: '', redirectTo: 'get', pathMatch: 'full' },
    { path: 'update', component: UpdateDataComponent }
];
