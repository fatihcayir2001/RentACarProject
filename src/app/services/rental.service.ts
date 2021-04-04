import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = 'https://localhost:44328/api/rentals/getdetails';

  constructor(private httpClient:HttpClient) { }

  
  getRentals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }

  addRental(rental: Rental): Observable<ListResponseModel<Rental>> {
    let newURL = 'https://localhost:44328/api/rentals/add';
    return this.httpClient.post<ListResponseModel<Rental>>(
      newURL,
      rental
    );
  }
  IsRentable(rental: Rental): Observable<ResponseModel> {
    let newURL = 'https://localhost:44328/api/rentals/isrentable';
    return this.httpClient.post<ResponseModel>(newURL, rental);
  }
}
