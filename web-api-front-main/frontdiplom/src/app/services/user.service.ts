import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../Models/responseModel';
import {map} from 'rxjs/operators'
import { ResponseCode } from '../enums/responseCode';
import { User } from '../Models/user';
import { Constants } from '../Helper/constants';

@Injectable({
  providedIn: 'root'
})

export class UserService {
   private readonly baseURL:string="http://localhost:36881/api/user/"
  constructor(private httpClient:HttpClient) { }

   public login(email:string , password:string)
   {
     const body={
       Email:email,
       Password:password
     }
    return this.httpClient.post<ResponseModel>(this.baseURL+"Login",body);
   }

   public register(fullname:string,email:string , password:string)
   {

     const body={
       FullName:fullname,
       Email:email,
       Password:password
     }
    return this.httpClient.post<ResponseModel>(this.baseURL+"RegisterUser",body);
   }

   public getAllUser()
   {
     let userInfo=JSON.parse(localStorage.Constants.USER_KEY);
    

    return this.httpClient.get<ResponseModel>(this.baseURL+"GetAllUser").pipe(map(res=>{
      let userList=new Array<User>();
      if(res.responseCode==ResponseCode.OK)
      {
           if(res.dateSet)
           {
           res.dateSet.map((x:User)=>{
               userList.push(new User(x.fullName,x.email,x.userName));
           })
           }
          }
          return userList;
    }));
   }

}
