import { Component,OnInit } from '@angular/core';
import { ServicecartService } from '../services/servicecart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public noofitem:number=0;
  constructor(private service:ServicecartService){}
  ngOnInit(){
    this.service.getProducts()
    .subscribe((res)=>{
      this.noofitem = res.length;
    })
  }
}
