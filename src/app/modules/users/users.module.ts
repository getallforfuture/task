import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {USER_REDUCER_NODE, userReducer} from './store/user/user.reducer';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(USER_REDUCER_NODE, userReducer)
  ]
})
export class UsersModule {

}
