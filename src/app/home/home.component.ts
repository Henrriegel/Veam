import { Component, OnInit } from '@angular/core';
import { Media } from '../shared/models/media.model';
import { MediaServices } from '../shared/services/media.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  mediaArray:Media[]=[]
  imgURL:String = 'https://image.tmdb.org/t/p/original'

  constructor(
    private mediaService:MediaServices,
    private ngbCarouselConfig:NgbCarouselConfig
  ){
    ngbCarouselConfig.interval = 3000;
  }

  ngOnInit(): void {
    this.mediaService.getTrendingAll().subscribe(allMedia=>{
      this.mediaArray = Object.values(allMedia)[1];
      this.mediaService.setMedia(this.mediaArray);
      
    })
  }
}
