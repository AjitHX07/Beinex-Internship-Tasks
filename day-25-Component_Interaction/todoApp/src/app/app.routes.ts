import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks',
        loadComponent: () =>
            import('./components/todo-list/todo-list.component').then(m => m.TodoListComponent)
    }
];