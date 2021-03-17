import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  

  apiUrl = 'https://localhost:44328/api/';

  //httpclient kullanabilmek için enjekte ettik

  constructor(private httpClient: HttpClient) {}
    
    

    
    getCars():Observable<CarResponseModel> {
      let newPath = this.apiUrl + "cars/getdetails"
      return this.httpClient .get<CarResponseModel>(newPath);
        
    }
   
    getCarsByColor(colorId:number):Observable<CarResponseModel> {
      let newPath = this.apiUrl + "cars/getbycolorid?id="+ colorId
      return this.httpClient .get<CarResponseModel>(newPath);
        
    }

    getCarsByBrand(brandId:number):Observable<CarResponseModel> {
      let newPath = this.apiUrl + "cars/getbybrandid?id="+ brandId
      return this.httpClient .get<CarResponseModel>(newPath);
        
    }

    getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
      let newPath = this.apiUrl + 'cars/getcardetailsbyid?id='+carId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath)
    }
  
}
