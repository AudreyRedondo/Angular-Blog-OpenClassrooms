import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  //Transmission du post depuis app-post-list.component
  @Input() post: Post;
  @Input() index: number;

  constructor(private postService: PostService) {}

  ngOnInit() {
  }

  addLovit(): void {
    this.postService.addLovit(this.index);
  }
 
  removeLovit(): void {
    this.postService.removeLovit(this.index);
  }
  
  removePost(): void {
    this.postService.removePost(this.index);
  }
}
