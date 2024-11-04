import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'template',
        component: TemplateDrivenFormComponent
    }, {
        path: 'reactive',
        component: ReactiveFormComponent
    }, { path: '', redirectTo: '/reactive', pathMatch: 'full' }
];

