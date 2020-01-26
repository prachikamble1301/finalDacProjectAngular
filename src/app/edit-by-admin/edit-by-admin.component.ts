import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AdminDashComponent } from '../admin-dash/admin-dash.component';

@Component({
  selector: 'app-edit-by-admin',
  templateUrl: './edit-by-admin.component.html',
  styleUrls: ['./edit-by-admin.component.css']
})
export class EditByAdminComponent implements OnInit {
data;
 regId;

  constructor(public activeRoute:ActivatedRoute,public router:Router,public service:AdminService) 
  { 
    
    activeRoute.paramMap.subscribe((params)=>{
      this.regId=params.get("regId");
     // alert(this.regId);
      this.service.getDataById(this.regId).subscribe((res)=>{
       
        console.log(res);
        this.data=res;
        console.log(this.data);

      })
  })
}

update()
{
  console.log(this.data);
  this.service.update(this.data).subscribe((response)=>{
    alert("Update Successfuly Done !!!")
   this.router.navigate(['adminDisplay']);
  });
}
    ngOnInit() {
  }

}
