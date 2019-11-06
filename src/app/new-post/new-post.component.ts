import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PositionList } from '../modelClasses/position-list';

import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';  
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  positionList: PositionList[]=[];
  jobPost:Post={
    id:'',
    position:'',
    openings:null
  }

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    //this.getPositionList();
    this.getPositionList().pipe(map((posistions)=>{
      console.log("emptyda?")
      // console.log(posistions)
      return posistions.position.map(pos=>{
        return{
          _id: pos._id,
          position:pos.position,
          jobSummery:pos.jobSummery,
          jobDescription:pos.jobDescription
        }
      })
    })).subscribe(data=>{
     
     
      this.positionList=data;
      console.log(this.positionList)
    }

    )
    
  }

  onSubmit(){
    this.getId(this.jobPost.position);
    console.log(this.jobPost);
      //  this.http.put<any>('http://localhost:3000/newPost',this.jobPost).subscribe(
      //   data => console.log('success', data)
      // )
      alert ("New position added!");
      this.router.navigate(['/Geveo/Dashboard']);
  }
  

getPositionList():Observable<any>{
  // this.http.post<PositionList[]>('http://localhost:3000/getPositions',null).subscribe(
  //   res =>{
  //         this.positionList=res;
  //         console.log(this.positionList)
  //   }
  // )

  console.log("check")
    return this.http.get<{message:string,position:PositionList[]}>("http://localhost:3000/api/position/check")

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
