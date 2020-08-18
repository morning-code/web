import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {BlogService} from './blog.service';

// google-code-prettify
declare var PR: any;

@Component({
  selector: 'app-blog',
  //template: '<div [innerHTML]="html"></div>',
  templateUrl: './blog.component.html',
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
    const {snapshot} = this.route;
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
          // NOTE: for debug
          //this.html = '<pre class="prettyprint"><code>$ echo \'foo\';</code></pre>'
          //console.log(this.response);
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  ngAfterViewChecked(): void {
    this.setPrettyPrint();
  }

  setPrettyPrint() {
    Array.prototype.slice.call(document.querySelectorAll("pre")).forEach(function (pre) {
      pre.setAttribute("class", "prettyprint");
    });

    PR.prettyPrint();
  }
}
