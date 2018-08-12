import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddskillsComponent } from './addskills/addskills.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyskillComponent } from './myskill/myskill.component';
import { SkillsComponent } from './skills/skills.component';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { DetailsComponent } from './details/details.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {AngularFireStorageModule} from 'angularfire2/storage';

const routes:Routes=[

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addskill',component:AddskillsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'myskill',component:MyskillComponent},
  {path:'skills',component:SkillsComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'userprofile',component:UserprofileComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddskillsComponent,
    LoginComponent,
    RegisterComponent,
    MyskillComponent,
    SkillsComponent,
    DetailsComponent,
    UserprofileComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 