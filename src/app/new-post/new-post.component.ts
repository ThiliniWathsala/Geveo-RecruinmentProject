import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PositionList } from '../modelClasses/position-list';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  positionList: PositionList[]=[];
  jobPost:Post={
    id:null,
    position:'',
    openings:null
  }

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.getPositionList();
  }

onSubmit(){
  this.getId(this.jobPost.position);
  console.log(this.jobPost);
    this.http.post<any>('http://localhost:3000/newPost',this.jobPost).subscribe(
      data => console.log('success', data)
    )
    alert ("New position added!");
    this.router.navigate(['/Geveo/Dashboard']);
}

getPositionList(){
  this.http.post<PositionList[]>('http://localhost:3000/getPositions',null).subscribe(
    res =>{
          this.positionList=res;
          console.log(this.positionList)
    }
  )

}
getId(post:string){
  for(let i of this.positionList){
    if(post === i.title){
      this.jobPost.id=i._id;
      return;
    }
  }
}

}


export interface Post{
  id:string;
  position:string;
  openings:number;
}
