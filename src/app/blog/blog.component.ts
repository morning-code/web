import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  template: '<div [innerHTML]="html"></div>',
  //templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  private id: String;
  public response: any = {};
  html: SafeHtml;


  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private blogService: BlogService
  ) {
    const { snapshot } = this.route;
    this.id = snapshot.params.id;
    console.log(this.id)
  }

  ngOnInit(): void {
    this.getBlog(this.id);
  }

  getBlog(blogId: String) {
     this.blogService.get(blogId)
        .then(
          (response) => {
            this.response = response;
            const html = response['html'];
            this.html = this.sanitizer.bypassSecurityTrustHtml(html);
            //this.html = '<pre><code>print_r("Hello World.");</code></pre>';
            console.log(this.response)
          }
        )
        .catch(
          (error) => console.log(error)
        );
  }

}
