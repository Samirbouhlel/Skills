import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import{Router} from '@angular/router';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  itemList:AngularFireList<any>
  itemArray=[]
  name :'';
  phone:'';
  skill:'';
  city:'';
  price:'';
  comments :''
  constructor(public db:AngularFireDatabase,public router :Router) { 
    this.itemList=db.list('skills')
    

    this.itemList.snapshotChanges().subscribe(actions=>{
actions.forEach(action=> {
 let y= action.payload.toJSON()
 y['$key']=action.key
this.itemArray.push(y as ListItemClass)
})

    })
    console.log(this.itemArray)
   

  }

  ngOnInit() {
  }

  details(key){

this.router.navigate(['details/'+key])
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
