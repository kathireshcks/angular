import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events=[];
  constructor(private _auth:AuthService,private _eventService: EventService,private _router: Router) { }
  
  imageUrl:string="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg";
  fileUpload:File=null;
  ngOnInit() {
    this._eventService.getEvents().subscribe(
      res => { this.events=res
                console.log(res);
                },
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['login'])
          }
        }
      }
    )
  }

  handleFileInput(file:FileList){
    this.fileUpload=file.item(0);

    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsDataURL(this.fileUpload);
  }
  // selectedFIle:File=null;
  // Data={}
  // onFileSelected(event){
    
  //   this.selectedFIle=<File>event.target.files[0];
  //   }

  // onUpload(){
  //   const fd=new FormData();
  //    fd.append('image',this.selectedFIle,this.selectedFIle.name);
  //   // console.log(fd);
  //   this.Data=fd;
  //    this._auth.imageupload(this.Data).subscribe(
  //     res => {
        
        
  //       //localStorage.setItem('token',res.token);
  //       /*let tokenInfo = this.getDecodedAccessToken(token); // decode token
  //       let expireDate = tokenInfo.exp; // get token expiration dateTime
  //       console.log(tokenInfo); // show decoded token object in console
  //       */
  //       this._router.navigate(['events']);
  //     },
  //     err =>console.log(err)
  //   )
  // }
  onSubmit(Caption,Image){

    this._auth.test().subscribe(
      res => {
       console.log("done");
      },
      err =>console.log(err)
    )
    
    this._auth.imageupload(Caption.value,this.fileUpload).subscribe(
           res => {
            console.log("done");
            Caption.value=null;
            Image.value=null;
            
             //localStorage.setItem('token',res.token);
             /*let tokenInfo = this.getDecodedAccessToken(token); // decode token
             let expireDate = tokenInfo.exp; // get token expiration dateTime
             console.log(tokenInfo); // show decoded token object in console
             */
             this._router.navigate(['events']);
           },
           err =>console.log(err)
         )


         
  }
}
