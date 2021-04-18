 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //jwtHelper: JwtHelperService = new JwtHelperService();
  token = this.localStorageService.get("Token");

  apiUrl = 'https://localhost:44379/api/';
  constructor(
    private httpClient:HttpClient,
    private localStorageService:LocalStorageService

  ) { }

  getByMail(email:string):Observable<SingleResponseModel<User>>{
    return this.httpClient.get<SingleResponseModel<User>>(this.apiUrl+"users/getbymail?mail="+email);
  }
  
  getById(id:number):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl+ "users/getbyıd?userId=" + id;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  // getUserId(){
  //   let userId:number = parseInt(this.jwtHelper.decodeToken(this.token?.toString())["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
  //   return userId;
  // }

  addFindexPoint(userId: number): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'users/addfindexpoint',
      userId
    );
  }
}
