import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  currentCar: Car;
  carImages: CarImage[];
  imageUrl:string = "https://localhost:44328/uploads/Images/"
  carDetails: CarDetailDto[] = [];
  filterText ="";

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId'])
        this.getCarByBrandAndColor(params['brandId'], params['colorId']);
      else if (params['brandId']) this.getCarsByBrand(params['brandId']);
      else if (params['colorId']) this.getCarsByColor(params['colorId']);
      else this.getCars();
    });
    
    
  }

  getCars() {
    this.carService.getAllCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCars(car: Car) {
    this.currentCar = car;
  }

  getCurrentCar(car:Car){
    if (car == this.currentCar) {
      return 'list-group-item active';
    }
    return 'list-group-item';
  }

  

  getAllImages(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarByBrandAndColor(brandId: number, colorId: number) {
    this.carService
      .getCarsDetailsByBrandAndColor(brandId, colorId)
      .subscribe((response) => {
        this.carDetails = response.data;
      });
  }
  
}

