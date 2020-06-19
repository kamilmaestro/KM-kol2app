import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {KMDataService} from './services/km-data.service';
import { KMForumComponent } from './components/km-forum/km-forum.component';
import { KMForumItemComponent } from './components/km-forum-item/km-forum-item.component';
import { KMForumDetailsComponent } from './components/km-forum-details/km-forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    KMForumComponent,
    KMForumItemComponent,
    KMForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    KMDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
