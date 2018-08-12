import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:any
itemList:AngularFireList<any>
itemArray=[]
name:'';
phone:'';
comments:'';
skill:'';
city:'';
price:'';
email:''

  constructor(private route:ActivatedRoute,public db:AngularFireDatabase) { 

    this.route.params.subscribe(params =>{

      this.id=params
    });
    this.itemList=db.list('skills')
    

    this.itemList.snapshotChanges().subscribe(actions=>{
actions.forEach(action=> {
 let y= action.payload.toJSON()
 y['$key']=action.key
 if(action.key === this.id['id']){
  this.itemArray.push(y as ListItemClass)
  this.name=this.itemArray[0]['name']
  this.phone=this.itemArray[0]['phone']
  this.comments=this.itemArray[0]['comments']
  this.skill=this.itemArray[0]['skill']
  this.city=this.itemArray[0]['city']
  this.price=this.itemArray[0]['price']
  this.email=this.itemArray[0]['email']


  
 }

})

    })
    console.log(this.itemArray)
  }

  ngOnInit() {
    console.log(this.id['id'])
  }

}
export class ListItemClass{
 
  $key:string;
   name :string;
 phone:string;
 skill:string;
 city:string;
 price:string;
 comments :string;
 email:string;
 }
 