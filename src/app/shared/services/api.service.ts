import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// const BASE_URL = 'https://technepal.azurewebsites.net/api';
const BASE_URL = 'https://localhost:7030/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  options: any = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  formDataOptions: any;
  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('tnTOKEN')) {
      this.options = {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', `Bearer ${localStorage.getItem('tnTOKEN')}`),
      };

      this.formDataOptions = {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('tnTOKEN')}`
        ),
      };
    }
  }

  public get(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    this.options.params = params;
    return this.httpClient
      .get(BASE_URL + path, this.options)
      .pipe(catchError(this.formatErrors));
  }
  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(BASE_URL + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }
  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .put(BASE_URL + path, body, this.options)
      .pipe(catchError(this.formatErrors));
  }
  public patch(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .patch(BASE_URL + path, body, this.options)
      .pipe(catchError(this.formatErrors));
  }
  public delete(path: string): Observable<any> {
    return this.httpClient
      .delete(BASE_URL + path, this.options)
      .pipe(catchError(this.formatErrors));
  }

  public putFile(path: string, body: any): Observable<any> {
    return this.httpClient
      .put(BASE_URL + path, body, this.formDataOptions)
      .pipe(catchError(this.formatErrors));
  }
  public patchFile(path: string, body: any): Observable<any> {
    return this.httpClient
      .patch(BASE_URL + path, body, this.formDataOptions)
      .pipe(catchError(this.formatErrors));
  }
  public postFile(path: string, body: any): Observable<any> {
    return this.httpClient
      .post(BASE_URL + path, body, this.formDataOptions)
      .pipe(catchError(this.formatErrors));
  }
  public formatErrors(error: any): Observable<any> {
    return throwError(() => error);
  }
}
