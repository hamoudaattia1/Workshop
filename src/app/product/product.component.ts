import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ConsumerProductService } from '../services/consumer-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number
listProduct:Product[]=[

]
constructor(private ps : ProductService , private cons:ConsumerProductService ) {}

ngOnInit(){ 
  this.cons.getProducts().subscribe(
    data => this.listProduct= data );
}

increment(id:number){
  this.listProduct[id].like++;
}

buy(id:number){
  this.listProduct[id].quantity--;

}
}
