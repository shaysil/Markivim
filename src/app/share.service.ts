import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

const userId$ = new Subject<string>();



@Injectable()

export class ShareService {

  private basePath = '/shares';
  constructor(private db: AngularFireDatabase) {
    
   }
   
   getProduct(ID: number){
    return this.db.object('shares/' + ID);
  }

  addRecipe(data) {
  const obj = this.db.database.ref(this.basePath);
  obj.push(data);
  console.log('Success');
  }

  getShares(path) {
    return this.db.list(path);
  }
  

}
  
