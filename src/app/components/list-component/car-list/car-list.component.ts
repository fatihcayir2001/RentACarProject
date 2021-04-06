import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars:CarDetailDto[];
  currentCar:Car;

  constructor(private carService:CarService,
    private route:ActivatedRoute,
    private toastrService:ToastrService,
    @Inject(DOCUMENT) private _document: Document
 ) { }


  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.carService.getAllCarDetails().subscribe(response=>{
      this.cars = response.data
    })
  }

  setCurrentCar(car:Car){
    this.currentCar = car
    console.log(this.currentCar)
  }

  delete(){
    this.carService.delete(this.currentCar).subscribe(response=>{
      this.toastrService.success(response.message,"Success")
    },errorResponse=>{
      this.toastrService.error(errorResponse,"Failed")
    });
    console.log("car list delete çalıştı")
  }

  refreshPage() {
      setTimeout(() => {
        window.location.reload();
        this.toastrService.success("İşlem başarılı","Yönlendirliyorsunuz")
      }, 1500);
  }
}
