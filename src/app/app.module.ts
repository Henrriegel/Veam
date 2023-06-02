import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';

import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataServices } from './shared/services/data.services';
import { MediaServices } from './shared/services/media.service';
import { RouterModule } from '@angular/router';
import { NgbdRatingTemplate } from "./rating/rating-template";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        MoviesComponent,
        SeriesComponent
    ],
    providers: [
        DataServices,
        MediaServices
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'Movies', component: MoviesComponent },
            { path: 'Series', component: SeriesComponent },
            { path: 'Information/:id', component: InfoComponent },
            { path: '**', component: PageNotFoundComponent }
        ]),
        NgbdRatingTemplate,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
