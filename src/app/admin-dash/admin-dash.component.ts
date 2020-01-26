
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  data:any;
  constructor(private adminService:AdminService,
    private router:Router ) { }

    getRegisteredUsers(){
      
      
      this.adminService.getRegisteredUsers().subscribe((res)=>{
        console.log(res);
        
        this.data=res;
      })
    }

  ngOnInit() {
  }



}
