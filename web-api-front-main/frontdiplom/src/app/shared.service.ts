import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, ObservedValuesFromArray} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl="http://localhost:36881/api";
   
  constructor(private http:HttpClient) { }
getAsiaList():Observable<any[]>{
return this.http.get<any>(this.ApiUrl+'/alltours');
}

getTourCurrentList(id:any){
  
  return this.http.get<any>('http://localhost:36881/api/alltours/'+id);
  
  
  }
}
