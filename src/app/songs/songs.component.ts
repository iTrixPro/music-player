import { Component, HostListener, OnInit } from "@angular/core";
import { SongsService } from "./songs.service";
import { Song } from './song';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { PlayerService } from "../player/player.service";

@Component({
  selector: "app-songs",
  templateUrl: "./songs.component.html",
  styleUrls: ["./songs.component.css"],
})
export class SongsComponent implements OnInit {
  public songs = new Array<Song>();
  playIcon = faPlayCircle;
  // artists ID
  private artists = [
    "1Xyo4u8uXC1ZmMpatF05PJ",
    "246dkjvS1zLTtiykXe5h60",
    "7rkW85dBwwrJtlHRDkJDAC",
    "2YZyLoL8N0Wb9xBt1NhZWg",
    "3u2R8st1bb6zfBqNWceRXG",
  ];

  constructor(private songs_service: SongsService, private player_service : PlayerService) {}

  //For each artists it will get all the data needed for the app
  ngOnInit() {
    this.artists.forEach((id) => {
      let artist : string;
      let title : string;
      let sleeve : string;
      let src : string;
      this.songs_service.getArtistTopTracks(id).subscribe((data) => {
        console.log(data);
        artist = data['tracks'][0]['artists'][0]['name'];
        data["tracks"].forEach(track => {
          title = track['name'];
          sleeve = track['album']['images'][0]['url'];
          src = track['external_urls']['spotify'];
          this.songs.push(new Song(artist, title, sleeve, src));
        });
      });
    });
  }

  // after displaying each songs availaible it will listen
  // if the user click on one song it will play it
  @HostListener('click', ['$event.path[3]'])
  onClick(event){
    let descriptions = event.innerText.split(' - ', 2);
    let url_sleeve = this.getUrlSleeve(event.innerHTML);
    this.player_service.play(url_sleeve, descriptions, this.getSrcByDescription(descriptions));
  }


  private getUrlSleeve(element : string) {
    let first_part = element.split('src="', 2);
    let last_part = first_part[1].split('">', 2);
    return last_part[0]
  }

  private getSrcByDescription(descriptions : string[]) {
    this.songs.forEach(song => {
      if (song.artist == descriptions[0] && song.title == descriptions[1]) {
        return song.src;
      }
    })
    return '';
  }
}
