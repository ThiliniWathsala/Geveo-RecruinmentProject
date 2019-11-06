import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewPositionComponent } from './add-new-position/add-new-position.component';
import { NewPostComponent } from './new-post/new-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { PositionListComponent } from './position-list/position-list.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path:'Geveo/NewPosition',component:AddNewPositionComponent},
  { path:'Geveo/NewPost',component:NewPostComponent},
  { path:'Geveo/Dashboard',component:DashboardComponent},
  { path:'Geveo/Home',component:HomeComponent},
  { path:'Geveo/JobPosts',component:JobPostsComponent},
  { path:'Geveo/PositionList',component:PositionListComponent},
  { path:'Geveo/Test',component:TestComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
