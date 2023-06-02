import { Injectable } from '@angular/core'
import { DataServices } from './data.services';
import { Media } from '../models/media.model';

@Injectable()
export class MediaServices {
    allMedia:Media[]=[]

    constructor(private dataService:DataServices){}

    setMedia(allNewMedia:Media[]){
        this.allMedia = allNewMedia;
    }

    getTrendingAll(){
        return this.dataService.getTrendingAll();
    }

    getMovieById(id:number){
        return this.dataService.getMovieById(id);
    }

    search(query:string){
        return this.dataService.search(query);
    }

    getTopRatedMovies(){
        return this.dataService.getTopRatedMovies();
    }

    getTopRatedTvSeries(){
        return this.dataService.getTopRatedTvSeries();
    }
}