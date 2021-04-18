import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { registerModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = 'https://localhost:44328/api/auth/';

  login(loginModel:LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login",loginModel)
  }

  register(registerModel:registerModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "register",registerModel)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }

  
}
