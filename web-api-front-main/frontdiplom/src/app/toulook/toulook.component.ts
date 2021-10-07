import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { Constants } from '../Helper/constants';
@Component({
  selector: 'app-toulook',
  templateUrl: './toulook.component.html',
  styleUrls: ['./toulook.component.css']
})
export class ToulookComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private tourService:SharedService
    ) { }
id:any;
tour:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');
    });
    this.getTourById(this.id);
  }
  
  get isUserlogin() {
    const user = localStorage.getItem(Constants.USER_KEY);
    return user && user.length > 0;
  }
getTourById(id:any){
  this.tourService.getTourCurrentList(id).subscribe((res)=>{
    this.tour=res;
  });
}
}
