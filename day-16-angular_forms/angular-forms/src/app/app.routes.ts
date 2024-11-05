import { Routes } from '@angular/router';
import { TemplateDrivenFormsCompComponent } from './components/template-driven-forms-comp/template-driven-forms-comp.component';
import { ReactiveDrivenFormsCompComponent } from './components/reactive-driven-forms-comp/reactive-driven-forms-comp.component';

export const routes: Routes = [
    {
        path: 'temp',
        component: TemplateDrivenFormsCompComponent
    },
    {
        path: 'reactives',
        component: ReactiveDrivenFormsCompComponent
    }
];
