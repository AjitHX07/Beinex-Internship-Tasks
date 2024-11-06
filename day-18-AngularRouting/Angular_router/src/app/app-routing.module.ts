import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FashionComponent } from './components/fashion/fashion.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "product/:id", component: ProductComponent },
  {
    path: "category", component: CategoryComponent,
    children: [
      { path: "elctronics", component: ElectronicsComponent },
      { path: "fashion", component: FashionComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
