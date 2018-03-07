import {Injectable} from '@angular/core';
import {Jsonp, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';

import {SearchItem}  from './searchitem';

@Injectable()
export class MusicService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];

  constructor(private jsonp: Jsonp) {
    this.results = [];
  }

  search(term: string) {
     return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
      this.jsonp.request(apiURL)
          .toPromise()
          .then(        
              res => { // Success
                this.results = res.json().results.map(item => {
                  return new SearchItem(
                      item.trackName,
                      item.artistName,
                      item.trackViewUrl,
                      item.artworkUrl30,
                      item.artistId,
                      item.previewUrl
                  );
                });
                resolve();
              },
              msg => { // Error
                    reject(msg);
              }
          );
    });
  }
}
