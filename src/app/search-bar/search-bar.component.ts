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
  wiki;
  info = '';
  picture;
  pictureInfo ='';
  pictureAuthor = '';
  news;


  constructor(private apiService: ApiService, private infoService: InfoService) { }

  searchQuery = (query) => {
    //TODO: request API
    this.apiService.getWiki(query)
    .then(response => this.wiki = response);
    console.log('this.wiki');
    console.log(this.wiki);
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
