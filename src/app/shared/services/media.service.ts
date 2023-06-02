import { Injectable } from '@angular/core'
import { DataServices } from 'src/app/data.services';
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
}