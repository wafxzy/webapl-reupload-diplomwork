import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private service:SharedService) { }

  
AsiatoursList:any=[];
totallenght:any;
page:number=1;
  ngOnInit(): void {
    this.refreshAsiatours();
  }
  
refreshAsiatours(){
  this.service.getAllList().subscribe(data=>{
    this.AsiatoursList=data
  this.totallenght=data.length
  });
}
}
