import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { BrandResponseModel } from '../models/brandResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44328/api/brands/getall';


  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }

  add(brand:Brand):Observable<BrandResponseModel>{
    return this.httpClient.post<BrandResponseModel>('https://localhost:44328/api/brands/add',brand);
  }

  delete(brand:Brand):Observable<BrandResponseModel>{
    return this.httpClient.post<BrandResponseModel>('https://localhost:44328/api/brands/delete',brand);
  }
  update(brand:Brand):Observable<BrandResponseModel>{
    return this.httpClient.post<BrandResponseModel>('https://localhost:44328/api/brands/update',brand);
  }

  getById(id:number):Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>('https://localhost:44328/api/brands/getbyid?id='+id);
  }
}
