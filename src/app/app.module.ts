import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {Routes,Router ,RouterModule } from '@angular/router';
import { CreateComponent } from '../app/coponents/create/create.component';
import { IndexComponent } from '../app/coponents/index/index.component'

import { ShareService } from './share.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayDetailsComponent } from './coponents/display-details/display-details.component';



const appRoutes:Routes=[
  {path:'',component:IndexComponent},
  {path:'add',component:CreateComponent},
  {path:"products/:id",component: DisplayDetailsComponent},
]
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
     
  ],
  declarations: [ AppComponent, IndexComponent, CreateComponent, DisplayDetailsComponent ],
  bootstrap: [ AppComponent ],
  providers: [ShareService]

})
export class AppModule {}

