import { Component, OnInit } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { ShareService } from '../../share.service';
import { ActivatedRoute, Router } from '@angular/router';
import {recipe} from './recipe';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  pageTitle:string = 'Product Detail';
  product:recipe;

  // product: IProduct;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _ShareService: ShareService) 
    {
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += ': '+id
    this.getProduct(id);
  }
  
  getProduct(id: number) {
    this._ShareService.getProduct(id).snapshotChanges().subscribe(console.log
     
    )
  }


  onBack(): void {
    this._router.navigate(['/products']);
  }

}
