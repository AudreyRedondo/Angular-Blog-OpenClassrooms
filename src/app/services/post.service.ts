import { Subject } from 'rxjs/Subject';
import { Post } from '../models/post.model';

export class PostService {
  
  public posts: Post[] =
  [
    {
      title: 'Mon premier post',
      content: 'Homines enim eruditos et sobrios ut infaustos et inutiles vitant, eo quoque accedente quod et nomenclatores adsueti haec et talia venditare, mercede accepta lucris quosdam et prandiis inserunt subditicios ignobiles et obscuros.',
      loveIts: 0,
      created_at: new Date('01/01/2019')
    },
    {
      title: 'Mon deuxième post',
      content: 'Homines enim eruditos et sobrios ut infaustos et inutiles vitant, eo quoque accedente quod et nomenclatores adsueti haec et talia venditare, mercede accepta lucris quosdam et prandiis inserunt subditicios ignobiles et obscuros.',
      loveIts: 0,
      created_at: new Date('07/01/2019')
    },
    {
      title: 'Encore un post',
      content: 'Homines enim eruditos et sobrios ut infaustos et inutiles vitant, eo quoque accedente quod et nomenclatores adsueti haec et talia venditare, mercede accepta lucris quosdam et prandiis inserunt subditicios ignobiles et obscuros.',
      loveIts: 0,
      created_at: new Date('02/02/2019')
    }
  ];
  postsSubject = new Subject<any[]>();

  emitPosts() {
    this.postsSubject.next(this.posts.slice());
  }

  addPost(post :Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(i: number) {
    if (confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
      this.posts.splice(i, 1);
      this.emitPosts();
    }
    else {
      return null;
    }
  }

  //Méthode pour incrémenter le nombre de lovits
  addLovit(i: number): void {
    this.posts[i].loveIts++;
    this.emitPosts();
  }
  //Méthode pour décrémenter le nombre de lovits
  removeLovit(i: number): void {
    this.posts[i].loveIts--;
    this.emitPosts();
  }

  //Méthode pour changer la couleur du post selon la valeur de lovits
  isPositive(i :number): boolean {
    if (this.posts[i].loveIts > 0) {
      return true;
    }
    else if (this.posts[i].loveIts < 0) {
      return false;
    }
  }

  //Méthode pour vérifier le nombre dans count
  isCount0(i :number): boolean {
    if (this.posts[i].loveIts === 0) {
      return true;
    }
    else {
      return false;
    }
  }

}
