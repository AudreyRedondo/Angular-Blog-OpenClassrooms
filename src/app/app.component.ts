import { Component } from '@angular/core';
import { Post } from './post';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string  = 'Posts';
  posts: Post[] =
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
}

