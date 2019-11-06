import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PositionList } from '../modelClasses/position-list';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';  
import { Subject } from 'rxjs';


@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {

  positions:PositionList[]=[];
  positionSub:Subscription;

  name:string="thilini";
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getPositions().pipe(map((posistions)=>{
      console.log("emptyda?")
      // console.log(posistions)
      return posistions.position.map(pos=>{
        return{
          id: pos._id,
          position:pos.position,
          jobSummery:pos.jobSummery,
          jobDescription:pos.jobDescription
        }
      })
    })).subscribe(data=>{
      this.name=data[0].jobDescription;
      console.log(data)
      this.positions=data;
    }

    )
  }

 
  // getPositions(){
  //   this.http.get<{message:string,position:PositionList[]}>("http://localhost:3000/api/position/check")
   
  //   .subscribe((fetchedPosition)=>{
  //     //console.log(fetchedPosition);
  //      this.positions=fetchedPosition.position;
  //      console.log(this.positions);
  //    // this.posUpdate.next([...this.positions]);
     
  //   });
  //   }
  getPositions():Observable<any>{
    console.log("check")
    return this.http.get<{message:string,position:PositionList[]}>("http://localhost:3000/api/position/check")
  }


  delete(pos:PositionList){
    console.log(pos);
    // const id =$value;
    // console.log(id);
    // this.http.post<PositionList[]>('http://localhost:3000/delPositions',$value).subscribe(
    //   response => {
    //     this.positions = response;
    //     console.log(this.positions);
    //   }
    // );
    this.http.post<any>('http://localhost:3000/delPositions',pos).subscribe(
      data => console.log('success', data)
    );
  }
}
