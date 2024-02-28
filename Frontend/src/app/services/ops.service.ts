import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../modal/prod.model';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpsService {
  url = "https://dummyjson.com/products";

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<{ products: Products[] }>(this.url).pipe(
      map(response => response?.products)
    );
  }
  

  getProductById(id: number): Observable<Products> {
    const url = `${this.url}/${id}`;
    return this.http.get<Products>(url);
  }
}
