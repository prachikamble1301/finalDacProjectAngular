import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { EmtrService } from '../emtr.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string;
  constructor(private userService:UserService,
    private router:Router,private emService:EmtrService,private translateService: TranslateService)
     { 
      translateService.addLangs(["en", "ge", "hi"]);
      translateService.setDefaultLang("en");
    }

  login(loginForm)
  {
    let data = loginForm.form.value;
   this.userService.login(data).subscribe(res=>{
     sessionStorage['userId']=res['userId'];
    sessionStorage['email']=res['email'];
    this.emService.logInBtnSwitch(true);
    if(res['role']=='VOTER')
    {
      this.router.navigate(['dash']);
    }
    else
    {
      this.router.navigate(['adminDisplay']);
    }
    

   },(err)=>{

    alert("Something went wrong");
   })
  }

  ngOnInit() 
  {
    
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}


