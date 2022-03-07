import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';
import { Post } from './models/post';

import  {PostService } from  './postservice/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 listaPosts : Post [] =  [];
 constructor(private  postservice :  PostService ){

 }
 ngOnInit(): void {
  this.listar();
 }

 listar(){
      this.postservice.listar().subscribe((value)=>{
        this.listaPosts =  value;
      });
 }
}
