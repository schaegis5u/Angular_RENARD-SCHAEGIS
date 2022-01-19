import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {withCredentials : true, headers : new HttpHeaders({'Content-type': 'application/json'})};

@Injectable({
    providedIn: 'root'
})

export class Http {

    public baseurl = "https://127.0.0.1/";

    constructor(public http: HttpClient){

    }

    get(url: string, options?: {}): Observable<any> {
        return this.http.get(this.baseurl + url, { ...httpOptions, ...options})
    }

    post(url: string, options?: {}): Observable<any> {
        return this.http.post(this.baseurl + url, { ...httpOptions, ...options})
    }
}
