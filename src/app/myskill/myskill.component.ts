import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import{Router} from '@angular/router';


@Component({
  selector: 'app-myskill',
  templateUrl: './myskill.component.html',
  styleUrls: ['./myskill.component.css']
})


export class MyskillComponent implements OnInit {

  itemList:AngularFireList<any>
  itemArray=[]
  name :'';
  phone:'';
  skill:'';
  city:'';
  price:'';
  comments :''

  myUid:any
  constructor(public db:AngularFireDatabase,public router :Router) { 
    this.itemList=db.list('skills')
    

    this.itemList.snapshotChanges().subscribe(actions=>{
actions.forEach(action=> {
 let y= action.payload.toJSON()
 y['$key']=action.key
this.itemArray.push(y as ListItemClass)
})

    })
    this.myUid=localStorage.getItem('uid')
    console.log(this.myUid)
  }

  ngOnInit() {
  }


  onEdit($key){
    this.name
    this.phone
    this.skill
    this.city
    this.price
    this.comments 
//console.log(" key "+$key+" name "+this.name+" phone "+this.phone+" skill "+this.skill+" city "+this.city+" price "+this.price)
  this.itemList.set($key,{
    name:this.name,
    phone:this.phone,
    skill:this.skill,
    city:this.city,
   price: this.price,
    comments:this.comments 

  })
  this.itemArray=[]

}
  onDelete($key){
this.itemList.remove($key)
this.itemArray=[]
  }
  editForm($key){
    for(let value of this.itemArray){
      if(value['$key']==$key){
        console.log(value['$key'])
       this.name =value['name'];
       this.phone=value['phone'];
       this.skill=value['skill'];
       this.city=value['city'];
       this.price=value['price'];
       this.comments =value['comments'];
      }
     
    }

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
}