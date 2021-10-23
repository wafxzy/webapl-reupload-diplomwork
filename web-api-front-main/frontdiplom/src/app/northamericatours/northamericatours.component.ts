import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-northamericatours',
  templateUrl: './northamericatours.component.html',
  styleUrls: ['./northamericatours.component.css']
})
export class NorthamericatoursComponent implements OnInit {

  constructor(private service:SharedService) { }

  AsiatoursList:any=[];
  totallenght:any;
  page:number=1;
    ngOnInit(): void {
      this.refreshAsiatours();
    }
  
  refreshAsiatours(){
    this.service.getNAList().subscribe(data=>{
      this.AsiatoursList=data
    this.totallenght=data.length
    });
  }
}
