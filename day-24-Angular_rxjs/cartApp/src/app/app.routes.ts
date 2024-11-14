import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        loadComponent: () => import('./components/product-list/product-list.component')
            .then(m => m.ProductListComponent),
        title: 'Products'
    },
    {
        path: 'cart',
        loadComponent: () => import('./components/cart/cart.component')
            .then(m => m.CartComponent),
        title: 'Cart'
    },
    {
        path: '**',
        redirectTo: 'products'
    }
];