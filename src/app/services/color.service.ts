import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { colorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44328/api/colors/getall';


  constructor(private httpClient:HttpClient) { }

  getColors():Observable<colorResponseModel>{
    return this.httpClient.get<colorResponseModel>(this.apiUrl);
  }

  add(color:Color):Observable<colorResponseModel>{
    let newApi = 'https://localhost:44328/api/colors/add'
    return this.httpClient.post<colorResponseModel>(newApi,color);
  }

  update(color:Color):Observable<colorResponseModel>{
    let newApi = 'https://localhost:44328/api/colors/update'
    return this.httpClient.post<colorResponseModel>(newApi,color);
  }

  delete(color:Color):Observable<colorResponseModel>{
    let newApi = 'https://localhost:44328/api/colors/delete'
    return this.httpClient.post<colorResponseModel>(newApi,color);
  }
}
