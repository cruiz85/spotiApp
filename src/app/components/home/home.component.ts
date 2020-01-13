import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[];
  loading: boolean;
  error = false;
  mensajeError: string;

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    // aqui se maneja un error del servicio!
    spotifyService.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (serviceError) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = serviceError.error.error.message; // esto es el objeto de rror que devuelve spotify
    });
  }

  ngOnInit() {

  }

}
