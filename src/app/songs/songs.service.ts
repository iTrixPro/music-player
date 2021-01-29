import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  constructor (private http : HttpClient) {}

  public getArtist(id: string) {
    const url = 'https://api.spotify.com/v1/artists/' + id + '/top-tracks?market=FR';
    const token = 'BQD66HCM2G3v7uidP_3KOJQGL9JL8r9xsOwEK8OOXJKYLKl4sj4W2teeNo9gEnsXgVdy8KewLjmT1FmqPOXb9leJANm5i4occTYEts5LPcOUYamL_mFMtut9I5hBA2lBh7xRrgVwo-JATp0U8ovXbtVxlqjV3ONZNR185Pse9S2CsmY9yW1KJ0zaqVigO5yq83G7d3miLFMKhA06MZ0ECVXiDmtwgPV2f7qXU-J87jU6UP9q72Qdb4S-XuXeA5AZMECRNTCHvEzp47fDij4kkFL6R214i4FKxn0'

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.get(url, {headers})
  }
}