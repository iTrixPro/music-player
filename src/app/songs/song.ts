/**
 * author: Marwan MEZROUI
 * Class which represent a Song
 */
export class Song {
  public artist: string;
  public title: string;
  public sleeve: string;
  public src: string;

  constructor(artist: string, title: string, sleeve: string, src: string) {
    this.artist = artist;
    this.title = title;
    this.sleeve = sleeve;
    this.src = src;
  }

}