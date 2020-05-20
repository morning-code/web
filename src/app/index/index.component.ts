import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from './index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private indexService: IndexService,
    private router: Router
  ) { }

  public response: any = {};

  ngOnInit(): void {
    this.getIndex();
  }

  getIndex() {
    this.indexService.get()
      .then(
        (response) => {
          this.response = response;
          console.log(this.response)
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  onClickCard(blogId: String) {
    this.router.navigate(['/blog', blogId]);
  }
}
