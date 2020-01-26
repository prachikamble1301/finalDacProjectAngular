import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  

  constructor(private http:HttpClient) { }

  getDataById(regId: any) {
    return this.http.get("http://localhost:8087/DacAug19/admin/user?regId="+regId);
   }

  getRegisteredUsers(){

    return this.http.get("http://localhost:8087/DacAug19/admin");

  }
  update(user)
  {
    return this.http.put("http://localhost:8087/DacAug19/admin",user);
  }
}
