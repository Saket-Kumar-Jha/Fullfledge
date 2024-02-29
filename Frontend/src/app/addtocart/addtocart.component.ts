import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ServicecartService } from '../services/servicecart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit{
  public productlist:any=[];
  public grandTotal:number=0;
  showDiscount: boolean = false;
  @ViewChild('coupon') discount! : ElementRef;
  public DisAmount!:number;


  constructor(private cartservice: ServicecartService,private route:Router){}

  ngOnInit(){
    this.cartservice.getProducts()
    .subscribe((res)=>{
      this.productlist = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
  }
  reoveIteam(iteam:any){
    this.cartservice.removeCartElement(iteam);
  }

  onClickDiscount(){
    let total = this.cartservice.getTotalPrice();
    console.log(total)
    let Code = this.discount.nativeElement.value;
    console.log(Code)
    let GrandAmount:number=0;
    if(Code==="GET10"){
       GrandAmount = (total*10)/100;
       total = total - GrandAmount
       this.DisAmount=total;
       this.showDiscount = true;
    }
    else{
      confirm("Coupon code is not valid")
      this.showDiscount = false;
    }
   
  }
  ProceedOrder() {
    if (confirm("Thank you For Your Order!!")) {
      this.route.navigate(['/card']);
      window.location.reload();

    }
  }
}
