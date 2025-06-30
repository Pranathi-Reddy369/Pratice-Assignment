import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../products.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl='http://localhost:3003/products';

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl);
}
addProducts(product: Product):Observable<Product> {
  return this.http.post<Product>(this.apiUrl, product);
}

editProduct(id: number,product:Product):Observable<Product> {
  return this.http.put<Product>(`${this.apiUrl}/${id}`,product);
}
deleteProduct(id:number):Observable<Product>{
  return this.http.delete<Product>(`${this.apiUrl}/${id}`);
}

}
