import { Component, OnInit,Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
@Input() article!: Article

vote_up(){
  this.article.voteUp()
}

vote_down(){
  this.article.voteDown()
}

  ngOnInit(): void {
    
  }
}
