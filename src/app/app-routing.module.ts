import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KMForumComponent} from './components/km-forum/km-forum.component';
import {KMForumDetailsComponent} from './components/km-forum-details/km-forum-details.component';


const routes: Routes = [
  {
    path: '',
    component: KMForumComponent
  },
  {
    path: 'post/:id',
    component: KMForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
