import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { toDate } from '@angular/common/src/i18n/format_date';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(private postService: PostService) {}
  posts: any[];

  ngOnInit(): void {
    this.posts = this.postService.posts;
  }
}

