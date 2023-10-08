import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../store/app.reducer';
import { Store, select } from '@ngrx/store';
import * as Selectors from '../store/app.selectors';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  public user$?: Observable<IUser>;

  constructor(private store: Store<IUser>) {
  }

  ngOnInit() {
    this.user$ = this.store.pipe(select(Selectors.selectUser));
  }
}
