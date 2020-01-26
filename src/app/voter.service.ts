import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  baseurl="http://localhost:8087/DacAug19/voter/register/";
  constructor(private http:HttpClient) { }

  voterRegistration(data,assId,uid,image){
    const formData=new FormData();
    formData.append("name",data.name);
    formData.append("surname",data.surname);
    formData.append("gender",data.gender);
    formData.append("boD",data.boD);
    formData.append("street",data.street);
    formData.append("villege",data.villege);
    formData.append("aadharNo",data.aadharNo);
    formData.append("image",image);
    formData.append("assId",assId);
    formData.append("uid",uid);
    console.log(formData);
    return this.http.post("http://localhost:8087/DacAug19/voter/register/",formData);

  }

  getData()
  {
    return this.http.get("http://localhost:8087/DacAug19/voter/registers");
  }

  trackStatus(data)
  {
    return this.http.put("http://localhost:8087/DacAug19/voter/search",data);
  }
  searchMyself(data)
  {
    return this.http.put("http://localhost:8087/DacAug19/voter/search",data);
  }
  updateMyself(data)
  {
    return this.http.put("http://localhost:8087/DacAug19/voter/searchForUpdate",data);
  }
  downloadcard(data)
  {
    return this.http.put("http://localhost:8087/DacAug19/voter/search",data);
  }
}
