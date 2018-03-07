import {Component} from '@angular/core';
import {MusicService} from './music.service';

@Component({
  selector: 'app-music',
  providers:[MusicService],
  template: `
<h1 class="well text-success">ITunes Music by Murthy</h1>
<form class="form-inline" style="margin:0px 0px 0px 400px" >
  <div class="form-group">
     <input type="search"
           class="form-control"
           value="winter" #search>           
  <button type="button"
          class="btn btn-primary"
          (click)="onSearch(search.value)">
    Search
  </button>
  </div>
  </form>
<hr />

<div class="text-center">
  <p class="lead"
     *ngIf="loading">Loading...</p>
</div>

<div class="list-group">
<h2 class="text-danger" *ngIf="flag">ITune Music Songs</h2>
<a 
     class="list-group-item list-group-item-action"
     *ngFor="let track of itunes.results">
    <img src="{{track.thumbnail}}">   
    {{ track.name }} -  {{ track.artist }}
    <a href="{{track.previewUrl}}" class="btn-sm btn-success">Listen</a>    
  </a>
</div>
 `
})
export class MusicComponent {
  private loading: boolean = false;
  private flag:boolean=false;
  constructor(private itunes: MusicService) {
      }

  onSearch(term:string) {
    this.loading = true;
    this.flag=true;
    this.itunes.search(term).then(() => this.loading = false)
  }
}
