import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

 //Transmission du tableau des posts depuis app.component
 @Input() posts: Post[];

  //Variable pour laisser le background des post qui ont 0 lovit
  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit() {
  }

  //Méthode pour changer la couleur du post selon la valeur de lovits
  isPositive(post: Post): boolean {
    if (post.loveIts > 0) {
      return true;
    }
    else if (post.loveIts < 0) {
      return false;
    }
  }

  //Méthode pour vérifier le nombre dans count
  isCount0(post: Post): boolean {
    if (post.loveIts === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
}
