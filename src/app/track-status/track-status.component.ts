import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoterService } from '../voter.service';

@Component({
  selector: 'app-track-status',
  templateUrl: './track-status.component.html',
  styleUrls: ['./track-status.component.css']
})
export class TrackStatusComponent implements OnInit {
details;
message=" ";
  constructor(private voterService:VoterService,
    private router:Router) { }

    trackStatus(trackStatusMyForm){

      let data = trackStatusMyForm.form.value;
     
      
          console.log(data);
  
      this.voterService.trackStatus(data).subscribe((res)=>{
        console.log(res);
        this.details=res;
        if(this.details.status=="true")
        {
          this.message="You Successfully Registered As Voter";
        }
        else if(this.details.status=null)
        {
          this.message="Your request is pending or rejected please check your email";
        }
      this.router.navigate(['trackStatus']);
  
  
      
      },(error)=>{
        this.message="Your request is pending or rejected please check your email";
      }
      )
    }
  ngOnInit() {
  }

}
