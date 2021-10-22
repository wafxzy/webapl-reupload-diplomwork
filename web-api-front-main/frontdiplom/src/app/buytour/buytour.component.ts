import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buytour',
  templateUrl: './buytour.component.html',
  styleUrls: ['./buytour.component.css']
})
export class BuytourComponent implements OnInit {
  public requestForm=this.formBuilder.group({
    fullName:['',[Validators.required]],
    adress:['',[Validators.required]],
    phonenumber:['',Validators.required],
    people:['',Validators.required],
    tourname:['',Validators.required]
  })
  constructor(private formBuilder:FormBuilder,private userServie:UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log("on submit")
    let fullName:string=this.requestForm.controls["fullName"].value;
    let adress:string=this.requestForm.controls["adress"].value;
    let phonenumber:number=this.requestForm.controls["phonenumber"].value;    
    let tourname:string=this.requestForm.controls["tourname"].value;
    let people:number=this.requestForm.controls["people"].value;
    this.userServie.sendtour(fullName,adress,phonenumber,people,tourname).subscribe((data)=>{

     console.log("response",data);
    },error=>{
      console.log("error",error)
    })
    this.router.navigate(["/home"]);
  }

}
