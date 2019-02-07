import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  title: string = 'Posts';
  posts: any[];
  postSubscription: Subscription;
  //Variable pour laisser le background des post qui ont 0 lovit
  count: number;

  constructor(private postService: PostService) {
    this.count = 0;
  }

  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.postService.emitPosts();
  }

  //Méthode pour changer la couleur du post selon la valeur de lovits
  isPositive(index :number): boolean {
    return this.postService.isPositive(index);
  }

  //Méthode pour vérifier le nombre dans count
  isCount0(index: number): boolean {
    return this.postService.isCount0(index);
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
  
}
