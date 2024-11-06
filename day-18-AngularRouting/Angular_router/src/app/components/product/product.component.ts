import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'

})
export class ProductComponent implements OnInit {
  productId!: string | null;
  productName: string = ""

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.productId = param.get('id');
    })

    this.route.queryParams.subscribe((param) => {
      this.productName = param['productName'] || 'product';
    })
  }


}
