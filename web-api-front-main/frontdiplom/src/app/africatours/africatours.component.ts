import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-africatours',
  templateUrl: './africatours.component.html',
  styleUrls: ['./africatours.component.css']
})
export class AfricatoursComponent implements OnInit {

  constructor(private service:SharedService) { }

  AsiatoursList:any=[];
  totallenght:any;
  page:number=1;
    ngOnInit(): void {
      this.refreshAsiatours();
    }
  
  refreshAsiatours(){
    this.service.getAfricaList().subscribe(data=>{
      this.AsiatoursList=data
    this.totallenght=data.length
    });
  }

}
