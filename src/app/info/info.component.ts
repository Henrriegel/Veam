import { Component, OnInit } from '@angular/core';
import { MediaServices } from '../shared/services/media.service';
import { NgbdRatingTemplate } from "../rating/rating-template";
import { Media } from '../shared/models/media.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  movie:Media = {};
  id:number = 0;
  imgURL:String = 'https://image.tmdb.org/t/p/original';

  constructor(
    private mediaService:MediaServices,
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mediaService.getMovieById(this.id).subscribe(Movie=>{
      this.movie = Movie;
      console.log(this.movie);
      
    })
  }
}
