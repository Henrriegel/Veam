import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

@Injectable()
export class DataServices {
    private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTkwMzFmNTNiYjFiZDM1NmQ2Mzk4NDM2ZjM5MTliZiIsInN1YiI6IjY0NzgxZmI2ZTMyM2YzMDE0ODE1MWRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eUE1ywxr5-5HzDDnIbqrDeGV_JVGRncKIxq0rxX6dSo'

    constructor(private httpClient:HttpClient){}

    getTrendingAll(){
        return this.httpClient.get('https://api.themoviedb.org/3/trending/all/day', {
            headers: {Authorization: 'bearer ' + this.apiKey}
        })
    }
}