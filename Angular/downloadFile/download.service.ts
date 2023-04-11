import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class DownloadService {

    constructor(private http: HttpClient) { }

    download(url: string): Observable<any> {
        return this.http.get(url, {
            responseType: 'blob'
        }).pipe(
            catchError((err) => {
                console.error(err);
                return throwError(err);
            }));
    }
}
