import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {
  }

  getQuery(value) {
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer BQBa2rp078vLaZ2dWncKj8vqrBJtSOuP-AYS_X_pLBt_-Z8M-KKSeYON01b-f5GgG6GVBRQesOlLUOaNODY'
    });
    const url = `https://api.spotify.com/v1/${value}`;
    return this.httpClient.get(url, {headers});
  }

  getNewReleases() {
    const queryUrl = 'browse/new-releases';
    return this.getQuery(queryUrl).pipe(map((data: any) => {
      return data.albums.items;
    }));

  }

  getArtists(value: string) {
    const queryUrl = `search?q=${value}&type=artist&market=us`;
    return this.getQuery(queryUrl).pipe(map((data: any) => {
      return data.artists.items;
    }));
  }

  getArtistaById(artistaId: string) {
    const queryUrl = `artists/${artistaId}`;
    return this.getQuery(queryUrl);
  }

  getTopTracks(artistaId: string) {
    const queryUrl = `artists/${artistaId}/top-tracks?country=us`;
    return this.getQuery(queryUrl).pipe(map((data: any) => {
      return data.tracks;
    }));
  }

}
