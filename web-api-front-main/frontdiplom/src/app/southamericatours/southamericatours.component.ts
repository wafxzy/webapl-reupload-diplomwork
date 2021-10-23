import { Component, OnInit } from '@angular/core';

import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-southamericatours',
  templateUrl: './southamericatours.component.html',
  styleUrls: ['./southamericatours.component.css']
})
export class SouthamericatoursComponent implements OnInit {

  constructor(private service:SharedService) { }

  AsiatoursList:any=[];
  totallenght:any;
  page:number=1;
    ngOnInit(): void {
      this.refreshAsiatours();
    }
  
  refreshAsiatours(){
    this.service.getSAList().subscribe(data=>{
      this.AsiatoursList=data
    this.totallenght=data.length
    });
  }

}
