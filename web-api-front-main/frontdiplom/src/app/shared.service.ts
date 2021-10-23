import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ObservedValuesFromArray} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl="http://localhost:36881/api";
   
  constructor(private http:HttpClient) { }
getAllList():Observable<any[]>{
return this.http.get<any>(this.ApiUrl+'/alltours');
}
getNAList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/northamerica');
  }
  
getAsiaList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/asiatours');
  }
  
getOceaniaList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/oceania');
  }
getSAList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/southamerica');
  }
  
getAfricaList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/africatours');
  }
getEuropeList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/europetours');
  }

getTourCurrentList(id:any){
  
  return this.http.get<any>('http://localhost:36881/api/alltours/'+id);
  
  
  }
}
