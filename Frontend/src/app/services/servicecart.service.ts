import { Injectable } from '@angular/core';
import { Products } from '../modal/prod.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicecartService {
  public cartelement:any=[];
  public prouctList = new BehaviorSubject<any>([]);
  constructor() { }
  getProducts(){
    return this.prouctList.asObservable();
  }
  setProduct(prod:any){
    this.cartelement.push(...prod);
    this.prouctList.next(prod);
  }
  addToCart(product:any){
    this.cartelement.push(product);
    this.prouctList.next(this.cartelement);
    this.getTotalPrice();
    console.log(this.cartelement)
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartelement.map((val:any)=>{
      grandTotal += val.total;
    })
    return grandTotal;
  }
  removeCartElement(prod:any){
    this.cartelement.map((val:any,index:any) => {
      if(prod.id === val.id){
        this.cartelement.splice(index,1);
      }
    })
    this.prouctList.next(this.cartelement)
  }
}
