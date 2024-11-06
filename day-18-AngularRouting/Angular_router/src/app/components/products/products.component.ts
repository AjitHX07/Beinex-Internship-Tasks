import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  constructor(private Routes: Router) { }

  redirectitem(id: number, productName: string) {
    this.Routes.navigate([`/product/`, id],
      { queryParams: { productName: productName } })
  }





}
