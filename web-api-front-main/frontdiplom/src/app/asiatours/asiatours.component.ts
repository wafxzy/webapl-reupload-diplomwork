import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-asiatours',
  templateUrl: './asiatours.component.html',
  styleUrls: ['./asiatours.component.css']
})
export class AsiatoursComponent implements OnInit {

  constructor(private service:SharedService) { }

AsiatoursList:any=[];
totallenght:any;
page:number=1;
  ngOnInit(): void {
    this.refreshAsiatours();
  }

refreshAsiatours(){
  this.service.getAsiaList().subscribe(data=>{
    this.AsiatoursList=data
  this.totallenght=data.length
  });
}

}
