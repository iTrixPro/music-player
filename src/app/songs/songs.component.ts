import { Component, OnInit } from "@angular/core";
import { SongsService } from "./songs.service";
import { Song } from './song';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: "app-songs",
  templateUrl: "./songs.component.html",
  styleUrls: ["./songs.component.css"],
})
export class SongsComponent implements OnInit {
  public songs = new Array<Song>();
  playIcon = faPlayCircle;
  private artists = [
    "1Xyo4u8uXC1ZmMpatF05PJ",
    "246dkjvS1zLTtiykXe5h60",
    "7rkW85dBwwrJtlHRDkJDAC",
    "2YZyLoL8N0Wb9xBt1NhZWg",
    "3u2R8st1bb6zfBqNWceRXG",
  ];

  constructor(private service: SongsService) {}

  ngOnInit() {
    this.artists.forEach((id) => {
      let artist : string;
      let title : string;
      let sleeve : string;
      this.service.getArtist(id).subscribe((data) => {
        artist = data['tracks'][0]['artists'][0]['name'];
        data["tracks"].forEach(track => {
          title = track['name'];
          sleeve = track['album']['images'][0]['url'];
          this.songs.push(new Song(artist, title, sleeve));
        });
      });
    });
    console.log(this.songs);
  }
}
