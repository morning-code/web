import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:8080';

  get(): Promise<any[]> {
    return this.http.get(this.url).toPromise()
      .then((res: any) => {
        return res;
      })
      .catch(this.errorHandler);
  }

  private errorHandler(err: any) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }
}
