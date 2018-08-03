import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: IProduct;
  
  public productList: IProduct[];
  constructor(private _activateRoutes: ActivatedRoute, private _product: ProductService
    , private _route: Router) { }

  ngOnInit() {
    let id = +this._activateRoutes.snapshot.paramMap.get('id');
    this._product.getProducts().subscribe(products => {
      this.productList = products.filter(r => r.productId == id);
      this.product = this.productList[0];
    });
  }

  onBack(): void {
    this._route.navigate(['/product']);
  }

}
