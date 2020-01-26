import { Component, OnInit } from '@angular/core';
import { VoterService } from '../voter.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-voter-registration',
  templateUrl: './voter-registration.component.html',
  styleUrls: ['./voter-registration.component.css']
})
export class VoterRegistrationComponent implements OnInit {
  uid:Int32Array;
  assms;
  assId:number;
  dist;
  state1;
  image:any;
  imgUrl;
 
  constructor(private voterService:VoterService,
    private router:Router) {
      this.getData()
     }

  voterRegistration(voterRegistrationMyForm){

    let data = voterRegistrationMyForm.form.value;
    this.uid=sessionStorage.userId;
    data.assmId=this.assId;
    
        console.log(data);

    this.voterService.voterRegistration(data,this.assId,this.uid,this.image).subscribe((res)=>{

    this.router.navigate(['voterRegistration']);


    
    },(error)=>{

    }
    )
  }
  selectedAssembly(aid){
    
    this.assId=aid.target.value;

  }
  getData(){
    // alert("in getdata")
    this.uid=sessionStorage.userId;
    // alert(this.uid)
    this.voterService.getData().subscribe((res)=>{
      console.log(res);
       this.assms=res;
    })
  }

  onSelect(event){
    this.image = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.image);
    // reader.onload = ((event) = {
    //   this.imgUrl = reader.result;  
    // }

    reader.onload = (_event) => { 
      this.imgUrl = reader.result; 
    }
  }
 
  ngOnInit() {
  }

}
