import { Component, OnInit } from '@angular/core';
import { Media } from '../shared/models/media.model';
import { MediaServices } from '../shared/services/media.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit{
  mediaArray:Media[]=[]
  imgURL:String = 'https://image.tmdb.org/t/p/original'

  constructor(
    private mediaService:MediaServices,
    private ngbCarouselConfig:NgbCarouselConfig
  ){
    ngbCarouselConfig.interval = 3000;
  }

  ngOnInit(): void {
    this.mediaService.getTopRatedTvSeries().subscribe(allMedia=>{
      this.mediaArray = Object.values(allMedia)[1];
      this.mediaService.setMedia(this.mediaArray);
      
    })
  }
}
