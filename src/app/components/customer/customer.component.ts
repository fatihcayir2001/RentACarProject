import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  dataLoaded:boolean=false
  customers:customer[]=[]
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
      this.customers=response.data
      this.dataLoaded=true
    })
  }
}
