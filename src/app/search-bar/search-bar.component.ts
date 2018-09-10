import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  query = '';
  picture = '';
  pictureInfo = '';
  pictureAuthor = '';
  news;
  wiki = [];
  hasWiki = false;
  wikiTitle = '';
  wikiInfo = '';
  wikiAnchor = '';

  constructor(private apiService: ApiService) { }

  searchQuery = (query) => {
    if (query) {
      //API request
      this.apiService.getWiki(query)
        .then(response => {
          if (response[1].length > 1) {
            this.hasWiki = true;
            this.wiki = response
            this.wikiTitle = response[1];
            this.wikiInfo = response[2];
            this.wikiAnchor = response[3];
          } else {
            this.hasWiki = false;
          }
        });

      this.apiService.getPicture(query)
        .then((response) => {
          console.log(response);
          this.picture = response.urls.regular;
          this.pictureInfo = response.description;
          this.pictureAuthor = response.user.name;
        });

      this.apiService.getNews(query)
        .then(response => {
          this.news = response.response.docs;
        });
    }
    else {
      this.query = '';
      this.picture = '';
      this.pictureInfo = '';
      this.pictureAuthor = '';
      this.news;
      this.wiki = [];
      this.hasWiki = false;
      this.wikiTitle = '';
      this.wikiInfo = '';
      this.wikiAnchor = '';
    }
  }

  ngOnInit() {
  }

}
