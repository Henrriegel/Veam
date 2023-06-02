import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataServices {
    private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTkwMzFmNTNiYjFiZDM1NmQ2Mzk4NDM2ZjM5MTliZiIsInN1YiI6IjY0NzgxZmI2ZTMyM2YzMDE0ODE1MWRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eUE1ywxr5-5HzDDnIbqrDeGV_JVGRncKIxq0rxX6dSo'

    constructor(private httpClient:HttpClient){}

    getTrendingAll(){
        return this.httpClient.get('https://api.themoviedb.org/3/trending/all/day', {
            headers: {Authorization: 'bearer ' + this.apiKey}
        })
    }

    getMovieById(id:number){
        return this.httpClient.get('https://api.themoviedb.org/3/movie/'+id, {
            headers: {Authorization: 'bearer ' + this.apiKey}
        })
    }

    search(searchString: string): Observable<any>{
        return this.httpClient.get('https://api.themoviedb.org/3/search/multi?query='+searchString, {
            headers: {Authorization: 'bearer ' + this.apiKey}
        })
    }

    getTopRatedMovies(){
        return this.httpClient.get('https://api.themoviedb.org/3/movie/top_rated', {
            headers: {Authorization: 'bearer ' + this.apiKey}
        })
    }

    getTopRatedTvSeries(){
        return this.httpClient.get('https://api.themoviedb.org/3/tv/top_rated', {
            headers: {Authorization: 'bearer ' + this.apiKey}
        })
    }
}