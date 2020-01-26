import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
 
import { Router } from '@angular/router';
import { VoterService } from '../voter.service';
//import html2canvas from 'html2canvas';
@Component({
  selector: 'app-search-myself',
  templateUrl: './search-myself.component.html',
  styleUrls: ['./search-myself.component.css']
})
export class SearchMyselfComponent implements OnInit {
message;
details;

public convetToPDF()
{
var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}

  constructor(private voterService:VoterService,
    private router:Router) { }
  
    searchMyself(searchMyselfMyForm){

      let data = searchMyselfMyForm.form.value;
     
      
          console.log(data);
  
      this.voterService.searchMyself(data).subscribe((res)=>{
        console.log(res);
        
        this.details=res;
        if(this.details.status=="true")
        {
          this.message="Your name is find in VoterList";

        }
        else if(this.details.status=null)
        {
          this.message="your Request is pending or rejected plzz check your email";
        }
      this.router.navigate(['searchMyself']);
  
  
      
      },(error)=>{
        this.message="your Request is pending or rejected plzz check your email";
      }
      )
    }

    // captureData()
    // {
    //   var data=document.getElementById('contentToConvert');
    //   html2canvas(data).then(function(canvas){
    //     var generatedImage=canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
    //     window.location.href=generatedImage;
    //   });
    // }

  ngOnInit() {
  }

}
