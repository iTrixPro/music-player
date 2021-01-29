import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  constructor (private http : HttpClient) {}

  public getArtistTopTracks(id: string) {
    const url = 'https://api.spotify.com/v1/artists/' + id + '/top-tracks?market=FR';

    // token needed for spotify's API
    const token = 'BQBeL3K9Kv2WJWN3e1NUHigXsioeUVtULbAcPLjTamlvcZpJsNoYPjj3w3MApKP8lbCVIYvdDDw27CXMpuAGMKkN5pSx0K_ExauOsU5X0kvodRFxZnxxs4PRLYIavkCF4wmEm-lTLbkwzEErU_paEhvKCYFFPFKlVVPW3P9ZP1RKVwHSighE9A3NabG50geJ68iHgnxaq7I0Sg6chgHnFea70raphrCiO45avRK1q3ClT1H0alNJFAHM6JpoCVxlVtN7DgeBoauOsXeS6XJv4Lu46OtBIY527Zo'

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    return this.http.get(url, {headers})
  }
}