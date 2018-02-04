import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template:`
    <div>Cookies {{ cookiesSold | async}}</div>
    <button (click)="sellOne()">Sell One</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  cookiesSold =  this.db.list('cookies').valueChanges();

  constructor(
    private db: AngularFireDatabase
  ){}

  ngOnInit() {
    console.log(this.cookiesSold);
  }

  sellOne() {
    this.db.object('/cookies/number').query.ref.transaction( x => x + 1);
  }
}
