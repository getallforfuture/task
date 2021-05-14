import {Pipe, PipeTransform} from '@angular/core';
import {User} from './interfaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform{
  transform(users: User[], value: string): any {
    return users.filter( user => user.first_name.toLowerCase().includes(value.toLowerCase()));
  }

}
