import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Int1 } from '../interfaces/int1';
import { Rest1 } from '../interfaces/rest1';

@Injectable({
  providedIn: 'root'
})

export class Service1Service {
  
  url:string="http://localhost:1157/data3s";

constructor(private http:HttpClient) { }

getData():Observable<Rest1>{
  return this.http.get<Rest1>(this.url);
}

postData(data:Int1):Observable<Rest1>{
  return this.http.post<Rest1>(this.url, data);
}
putData(link:string, data:Int1):Observable<Rest1>{
  return this.http.put<Rest1>(this.url+"/"+data.id, data);
}
deleteData(data:Int1):Observable<Rest1>{
  return this.http.delete<Rest1>(this.url+"/"+data.id);
}

}
