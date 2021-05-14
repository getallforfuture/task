import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './shared/users.service';
import {User} from './shared/interfaces';
import {Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  selectedUser?: User;

  title = 'task';
  Users$?: Observable<User[]>;
  searchStr = '';

  constructor(
    private usersService: UsersService,
  ) {
  }

  ngOnInit(): void {
   this.Users$ = this.usersService.fetch();
  }
  selectUser(id: string): void{
    this.usersService.getUser(id).subscribe(
      user => this.selectedUser = user
    );
  }
}
