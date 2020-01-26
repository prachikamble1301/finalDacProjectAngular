import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  register(user){

    return this.http.post("http://localhost:8087/DacAug19/user/register",user);

  }
 
  login(user)
  {
    return this.http.post("http://localhost:8087/DacAug19/user/login",user);
  }
  forgot(user)
  {
    return this.http.post("http://localhost:8087/DacAug19/user/forgot",user);
  }
  confirmOtp(otp)
  {
    return this.http.post("http://localhost:8087/DacAug19/user/confirmOtp",otp);
  }

  resetPassword(pass)
  {
    return this.http.post("http://localhost:8087/DacAug19/user/resetpassword",pass);
  }
  
}
