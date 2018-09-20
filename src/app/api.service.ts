import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getNews = (query) => {
    return fetch(`http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=1a5ee5890b53485181de2e0448629dc4`)
      .then(response => response.json())
  }

  getWiki = (query) => {
    //return fetch(this.wikiUrl + query)
    return Promise.resolve($.ajax({
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + query + "&limit=5",
      dataType: 'jsonp',
      success: function (data) {
        console.log('data');
        console.log(data);
        return data;
      }
    }));
  }

  // get picture from Unsplash.com
  getPicture = (searchedForText) => {
    return fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}&orientation=landscape`, {
      headers: {
        Authorization: 'Client-ID a48062502e7f4d944b4c6d7b38b9488eed4b6dbea4fc8039aa015fe3cf7790ff'
      }
    }).then(response => response.json())
      .then((data) => {
        let firstImg = data.results[0];
        return firstImg;
      });
  }
}
