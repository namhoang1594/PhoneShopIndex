import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';
import { Blogs } from './blogs.model';
import { appModuleAnimation } from './shared/animation/routerTransition';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  animations: [appModuleAnimation()],
  styleUrls: [
    
  ]
})
export class BlogsComponent implements OnInit {
  blogs :Blogs[]=[];

  constructor(private blogService: IndexService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.blogService.getAll().subscribe((res:any)=>{
      this.blogs = res
    })
  }
}
