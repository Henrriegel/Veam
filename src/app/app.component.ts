import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MediaServices } from './shared/services/media.service';
import { debounceTime } from 'rxjs';
import { Media } from './shared/models/media.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Veam';
  mediaArray:any = [];
  control = new FormControl();
  constructor(
    private mediaService:MediaServices
  ){
    
  }

  ngOnInit(): void {
    this.observerChangeSearch();
  }

  observerChangeSearch(){
    this.control.valueChanges.pipe(debounceTime(1000)).subscribe(query=> {
      this.search(query);
    })
  }

  search(query:string):void {
    this.mediaService.search(query).subscribe(allMedia=>{
      this.mediaArray = Object.values(allMedia)[1];
      console.log(this.mediaArray);
    })
  }
  
}