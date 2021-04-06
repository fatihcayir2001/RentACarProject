import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { carModel } from 'src/app/models/carModelInDB';
import { CarService } from 'src/app/services/car.service';
import { CarListComponent } from 'src/app/components/list-component/car-list/car-list.component'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})

export class CarDeleteComponent implements OnInit {

  cars:CarDetailDto[]
  currentCar:Car

  constructor(private carService:CarService,private carListComponent:CarListComponent,private toastrService:ToastrService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCars()
    
  }

  getCars(){
    this.carService.getAllCarDetails().subscribe(data=>{
      this.cars = data.data
      this.currentCar = this.carListComponent.currentCar
    })
  }

  

  
  
}
