import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private httpp:HttpClient) { }
  getProducts(){
    return this.httpp.get<Product[]>('http://localhost:3000/posts')
  }
}
