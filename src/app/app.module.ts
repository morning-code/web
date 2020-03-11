import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // application pages
  { path: '', component: IndexComponent },
  { path: 'blog', component: BlogComponent, pathMatch: 'full' },
  // error pages
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BlogComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
