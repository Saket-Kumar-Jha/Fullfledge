import { Component, OnInit } from '@angular/core';
import { Products } from '../modal/prod.model';
import { OpsService } from '../services/ops.service';
import { ServicecartService } from '../services/servicecart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  product: any = [];
  constructor(private ops:OpsService,private cart:ServicecartService,private snackBar: MatSnackBar,private router:Router){}
  ngOnInit() {
    this.ops.getProducts().subscribe(
      (data:any) => {
        this.product = data;
        this.product.forEach((val:any)=>{
          Object.assign(val,{Quantity:1,total:val.price})
        })
      },
      (err) => {
        console.log("Error", err);
      }
    );
  }

  addToCart(item: Products) {
    const existingItem = this.cart.cartelement.find((cartItem: Products) => cartItem.id === item.id);
  
    if (existingItem) {
      existingItem.Quantity += 1;
      existingItem.total = existingItem.Quantity * existingItem.price;
      this.cart.prouctList.next(this.cart.cartelement);
    } else {
      const newItem = { ...item, Quantity: 1, total: item.price };
      this.cart.addToCart(newItem);
    }
  
    const snack = this.snackBar.open('Added To Cart', 'View', {
      duration: 3000,
    });
  
    snack.onAction().subscribe(() => {
      this.router.navigate(['/addtocart']);
    });
  }
  
  }

  