import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Blogs } from './blogs/blogs.model';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';




const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  authToken: any;

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Blogs[]>{
    return this.httpClient.get<Blogs[]>(apiUrl).pipe(
    )
  }
  getUser() {
    let headers = new HttpHeaders();
    this.authToken = this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.httpClient.get<Blogs>('http://localhost:21021/api/services/app/Blog/GetAll', {headers: headers})
    .pipe(map((res: any) => res.json()));
  }

  loadToken(){
    const Token = localStorage.getItem('id_token');
     return Token;
  }

}
