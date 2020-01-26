import { Component, OnInit } from '@angular/core';
import { VoterService } from '../voter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-myself',
  templateUrl: './update-myself.component.html',
  styleUrls: ['./update-myself.component.css']
})
export class UpdateMyselfComponent implements OnInit {
  message;
details;

  constructor(private voterService:VoterService,
    private router:Router) { }
  
    searchMyself(searchMyselfMyForm){

      let data = searchMyselfMyForm.form.value;
     
      
          console.log(data);
  
      this.voterService.updateMyself(data).subscribe((res)=>{
        console.log(res);
        
        this.details=res;
        
      this.router.navigate(['updatemyself']);
        this.message="Check following details!!!";
  
      
      },(error)=>{
        this.message="First enroll yourself";
      }
      )
    }

updateMyself()
{
  console.log(this.details);
  this.voterService.updateMyself(this.details).subscribe((response)=>{
    alert("Update Successfuly Done !!!")
   this.router.navigate(['dash']);
  });
}

  ngOnInit() {
  }

}
