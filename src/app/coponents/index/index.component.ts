import { Component, OnInit } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { ShareService } from '../../share.service';
import { ActivatedRoute, Router } from '@angular/router';
import { recipe } from '../display-details/recipe';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  recipeList: recipe[];

  public shares: Observable<any[]>;
  constructor(private shareservice: ShareService,private _router: Router) { }

  ngOnInit() {
    var x = this.getShares('/shares');
    x.snapshotChanges().subscribe(item => {
      this.recipeList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.recipeList.push(y as recipe);
        console.log(this.recipeList)
      });
    });
  }
  
  getShares(path) {
    return this.shareservice.getShares(path);   
  }
  
  goToDetailPage(key: string) {
    alert(key)
  };
  
}