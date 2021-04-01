import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/carDetail.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetailDto[];
  carImages: CarImage[];
  imageUrl:string = "https://localhost:44328/uploads/Images/"
  currentCar:Car;
  dataLoaded = false
  car:Car;

  constructor(
    private carDetailsService: CardetailService,
    private activatedRoute: ActivatedRoute,
    private carImageService:CarImageService,
    private carService:CarService,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params["carId"]) {
        this.getCarImagesByCarId(params["carId"]);
        this.getCarDetailsById(params["carId"]);
      }
      
    });
  }

  getCarDetailsById(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.car = response.data[0]
      this.dataLoaded = true;
    });
  }
  getCurrentCarClass(car:Car) {
    if (car == this.currentCar) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data;
      this.dataLoaded = true;
    })
  }
  
  setCurrentCar(car:Car){
    this.currentCar = car;
  }

  getSliderClassName(index:number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }

  rent(car:Car){
    console.log(car);
    this.toastrService.success(car.carId + " numarali arabayi sectiniz","Dikkat")
  }
 
}
