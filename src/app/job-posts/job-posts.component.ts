import { Component, OnInit } from '@angular/core';
import { JobPostList } from '../modelClasses/job-post-list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrls: ['./job-posts.component.css']
})
export class JobPostsComponent implements OnInit {

  postList:JobPostList[]=[];


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getJobPostList(); 
  
  }
  
  
    getJobPostList(){
      this.http.post<JobPostList[]>('http://localhost:3000/getPosts',null).subscribe(
    res =>{
          this.postList=res;
          console.log(this.postList);
    }
  );
    }

}

