import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { AddNewPositionComponent } from './add-new-position/add-new-position.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PositionListComponent } from './position-list/position-list.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostNewPositionService } from './services/post-new-position.service';
import { TestComponent } from './test/test.component';
import { MainviewComponent } from './mainview/mainview.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    JobPostsComponent,
    AddNewPositionComponent,
    NewPostComponent,
    PositionListComponent,
    HomeComponent,
    TestComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostNewPositionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
