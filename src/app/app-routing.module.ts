import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlogComponent} from './blog/blog.component';

@NgModule({
  imports: [RouterModule.forRoot([
    //{ path: 'blog/:id', component: BlogComponent, loadChildren: 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'}
    {path: 'blog/:id', component: BlogComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
