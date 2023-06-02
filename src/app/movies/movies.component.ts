import { Component, OnInit } from '@angular/core';
import { Media } from '../shared/models/media.model';
import { MediaServices } from '../shared/services/media.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  mediaArray:Media[]=[]
  imgURL:String = 'https://image.tmdb.org/t/p/original'

  constructor(
    private mediaService:MediaServices,
    private ngbCarouselConfig:NgbCarouselConfig
  ){
    ngbCarouselConfig.interval = 3000;
  }

  ngOnInit(): void {
    this.mediaService.getTopRatedMovies().subscribe(allMedia=>{
      this.mediaArray = Object.values(allMedia)[1];
      this.mediaService.setMedia(this.mediaArray);
      
    })
  }
}