import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpsService } from '../services/ops.service';
import { ServicecartService } from '../services/servicecart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId!:number;
  data:any=[];
  constructor(private route: ActivatedRoute,private operations:OpsService,private cart:ServicecartService){}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
     if (idParam) {
     this.productId = +idParam;
     console.log(this.productId)
     this.fetchData();
     }
  }
  fetchData() {
    this.operations.getProductById(this.productId).subscribe(
      (result: any) => {
        this.data = result;
        console.log('Fetched data:', this.data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
}

// callSameService(iteam:any) {
//   this.cart.addToCart(iteam);
// }
}
