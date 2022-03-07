import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {



  constructor(private http: HttpClient) { }

  listar(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiBaseUrl + "/posts");
  }





}
