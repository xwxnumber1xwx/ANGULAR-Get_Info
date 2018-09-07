import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { InfoService } from '../info.service'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  query = '';

  info = '';
  picture;
  pictureInfo = '';
  pictureAuthor = '';
  news;
  wiki;
  hasWiki = false;
  wikiTitle = '';
  wikiInfo = '';
  wikiAnchor = '';

  constructor(private apiService: ApiService, private infoService: InfoService) { }

  searchQuery = (query) => {
    //TODO: request API
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

    this.info = this.infoService.getInfo();

    this.apiService.getPicture(query)
      .then((response) => {
        this.picture = response.urls.small;
        this.pictureInfo = response.description;
        this.pictureAuthor = response.user.name;
      });

    this.apiService.getNews(query)
      .then(response => {
        this.news = response.response.docs;
      });
  }

  ngOnInit() {
  }

}
