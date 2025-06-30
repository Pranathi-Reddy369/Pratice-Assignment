import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private apiUrl="http://localhost:3000/school";
  constructor(private http:HttpClient) {}

  getDetails():Observable<any>{
     return this.http.get(this.apiUrl);
  }
  
  addDetails(data: any):Observable<any>{
    return this.http.post(this.apiUrl,data);
  }
  editDetails(id: number,item: any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`,item)
  }
  deleteDetails(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
