import { Component, OnInit,DoCheck } from '@angular/core';
import {IProduct} from '../iproduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'pm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  
  public imgWidth:string='40';
  public imgMargin:string='2';
  public showImage:boolean=false;
  public ratingClicked:string;
  // public listFilter:string='cart';

  _listFilter:string;
  get listFilter():string {return this._listFilter}
  public product:IProduct[]
  public productFilterList:IProduct[];
  set listFilter(value:string){
    this._listFilter=value;
    this.productFilterList=this.listFilter?this.performFilter(this.listFilter):this.product
  }
  constructor(private _productService:ProductService) { 
  }

  ngOnInit() {
     this._productService.getProducts().subscribe(product=>{
      this.product=product;
      this.productFilterList=this.product
    });
    
  }
   
  toggleImage():void{
    this.showImage=!this.showImage;
  }

  performFilter(value:string): IProduct[] {
   value= value.toLocaleLowerCase();
   return  this.product.filter(r=>r.productName.toLocaleLowerCase().indexOf(value)!=-1)
  }
  onRatingClick(event){
    let rating=event;
    this.ratingClicked="You have clicked" + rating + "STAR";
  } 
}
