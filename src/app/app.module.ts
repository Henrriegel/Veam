import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'

import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataServices } from './data.services';
import { MediaServices } from './shared/services/media.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'Movies', component:MoviesComponent},
      {path: 'Series', component:SeriesComponent},
      {path: '**', component:PageNotFoundComponent}
    ])
  ],
  providers: [
    DataServices,
    MediaServices
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
