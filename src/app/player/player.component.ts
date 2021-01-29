import { Component, OnInit } from '@angular/core';

import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playIcon = faPlayCircle;
  previousIcon = faStepBackward;
  nextIcon = faStepForward;
  static artist: string;
  static title: string;
  static url: string;
  static src : string;
  static is_playing = false;

  public classRef = PlayerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  static setDescriptions(artist : string, title : string) {
    this.artist = artist;
    this.title = title;
  }

  static setUrl(url : string) {
    this.url = url;
    this.is_playing = true;
  }

  static setSrc(src : string) {
    this.src = src;
  }

}
