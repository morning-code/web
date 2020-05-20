import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  private urlBase = 'http://localhost:9080';

  get(blogId: String): Promise<any[]> {
    const url = this.urlBase + '/blog/' + blogId;
    return this.http.get(url).toPromise()
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
