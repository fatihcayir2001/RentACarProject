import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  apiUrl="https://localhost:44328/api/"

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getbycarid?id="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarDetails(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getdetails';
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarDetailsById(carId: number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath = this.apiUrl + 'cars/getdetailsbyid?id' + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

}
