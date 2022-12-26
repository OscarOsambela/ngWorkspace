import { Injectable } from '@angular/core';
//importaciones de rxjs
import { Observable, of } from 'rxjs';
import { Product } from '../types/product.type';
import { PRODUCT_LIST } from '../mocks/product.mock';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor() { }

  getUserData():Observable<string | number>{
    return of('Hola', 'Oscar', 30)
  }

  getAllProducts(): Observable<Product[]>{
    return of (PRODUCT_LIST);
  }
}
