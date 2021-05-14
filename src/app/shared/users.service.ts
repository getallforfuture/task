import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './interfaces';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<User[]>{
    return this.http.get<User[]>('/assets/db.json');
  }

  getUser(id: string): Observable<User> {
    // @ts-ignore
    return this.http.get<User[]>('/assets/db.json').pipe(
      map(users => users.find(user => user.id === id))
    );
  }

}
