import { Component } from '@angular/core';
import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular','http://angular.io',3),
      new Article('fullstack','http://fullstack.io',2),
      new Article('Angular homepage','http://angular.io',1),
    ]
  }
  add_article(title:HTMLInputElement,link:HTMLInputElement){
    this.articles.push(new Article(title.value,link.value))
    title.value = ''
    link.value = ''
  }

  sortedArticle(): Article[]{
    return this.articles.sort((a: Article,b:Article)=>b.votes - a.votes)
  }
}
