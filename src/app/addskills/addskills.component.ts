import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
/*import { Observable } from 'rxjs';*/
import{Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import { auth } from 'firebase';




@Component({
  selector: 'app-addskills',
  templateUrl: './addskills.component.html',
  styleUrls: ['./addskills.component.css']
})
export class AddskillsComponent implements OnInit {
 /*data={
   name :'',
  phone:'',
  skill:'',
  city:'',
  price:'',
  comments :''
}*/
name :'';
phone:'';
skill:'';
city:'';
price:'';
comments :''
/*items:Observable<any[]>;*/
 itemList:AngularFireList<any>
 email:string='';
 uid:any;
  constructor(private fire:AngularFireAuth,public db:AngularFireDatabase,public router :Router) {
    this.itemList=db.list('skills')
    
    let user=localStorage.getItem('email')
    this.email=user
    console.log(user)
    console.log('***********************') 
    this.uid=localStorage.getItem('uid')
    console.log('uid :'+this.uid)
   /* this.fire.authState.subscribe(auth=>{
 if(auth){

  this.uid=auth.uid
  console.log('uid:'+this.uid)
 


    })*/

   }

  ngOnInit() {
    
    console.log(this.name)
  }

  
  insertSkill(){
    this.itemList.push({
      name :this.name,
      phone:this.phone,
      skill:this.skill,
      city:this.city,
      price:this.price,
      comments :this.comments,
      uid:this.uid,
      email:this.email

    })

    this.router.navigate(['/myskill'])
  }
}
