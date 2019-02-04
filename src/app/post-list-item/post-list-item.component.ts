import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  //Transmission du post depuis app-post-list.component
  @Input() post: Post;

  constructor() {}

  ngOnInit() {
  }

  //Méthode pour incrémenter le nombre de lovits
  addLovit(post :Post): void {
    post.loveIts++;
  }
  //Méthode pour décrémenter le nombre de lovits
  removeLovit(post: Post): void {
    post.loveIts--;
  }
}
