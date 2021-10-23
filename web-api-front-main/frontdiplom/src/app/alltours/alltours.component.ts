import { Component, OnInit } from '@angular/core';

import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-alltours',
  templateUrl: './alltours.component.html',
  styleUrls: ['./alltours.component.css']
})
export class AlltoursComponent implements OnInit {

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
