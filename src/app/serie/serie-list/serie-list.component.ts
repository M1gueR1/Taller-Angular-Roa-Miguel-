import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
  imports:[CommonModule]
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  serieEscogida: Serie | null = null;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      //console.log("hola");
    });
  }

  getAverageSeason(): number{
    let promedio: number = 0;
    let cantidad: number = 0;
    for(let seriesRecorriendo of this.series){
      promedio += seriesRecorriendo.seasons;
      cantidad += 1;
    }

    if(cantidad == 0){
      return 0;
    }
    return promedio/cantidad;
  }

  selectSerie(serie: Serie): void {
    this.serieEscogida = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
