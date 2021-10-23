import { Component, OnInit } from '@angular/core';

import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-europetours',
  templateUrl: './europetours.component.html',
  styleUrls: ['./europetours.component.css']
})
export class EuropetoursComponent implements OnInit {

  constructor(private service:SharedService) { }

  AsiatoursList:any=[];
  totallenght:any;
  page:number=1;
    ngOnInit(): void {
      this.refreshAsiatours();
    }
  
  refreshAsiatours(){
    this.service.getEuropeList().subscribe(data=>{
      this.AsiatoursList=data
    this.totallenght=data.length
    });
  }
}
