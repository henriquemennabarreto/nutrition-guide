import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/store/app.reducer';
import * as Selectors from '../../../store/app.selectors';

@Component({
  selector: 'app-user-avatar',
  templateUrl: 'user-avatar.component.html',
  styleUrls: ['user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit, OnDestroy {

  public profilePicture: string|null;
  public profilePicturePlaceholder: string = '/assets/img/avatar-placeholder.jpg';
  private userSubscription?: Subscription;

  constructor(private store: Store<IUser>) {
    this.profilePicture = this.profilePicturePlaceholder;
  }

  ngOnInit() {
    this.userSubscription = this.store.pipe(select(Selectors.selectUser))
      .subscribe((user: IUser) => {
        this.profilePicture = user?.profilePicture || null;
      });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

}
