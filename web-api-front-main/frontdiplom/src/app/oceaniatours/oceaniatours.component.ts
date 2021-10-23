import { Component, OnInit } from '@angular/core';

import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-oceaniatours',
  templateUrl: './oceaniatours.component.html',
  styleUrls: ['./oceaniatours.component.css']
})
export class OceaniatoursComponent implements OnInit {

  constructor(private service:SharedService) { }

  AsiatoursList:any=[];
  totallenght:any;
  page:number=1;
    ngOnInit(): void {
      this.refreshAsiatours();
    }
  
  refreshAsiatours(){
    this.service.getOceaniaList().subscribe(data=>{
      this.AsiatoursList=data
    this.totallenght=data.length
    });
  }
}
