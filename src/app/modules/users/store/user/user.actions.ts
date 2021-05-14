import {Action} from '@ngrx/store';

export enum userActionsType {
  create = '[User] create user'
}

export class UserCreateAction implements Action {
  readonly type = userActionsType.create;

  constructor(public payload: { name: string}) {
  }
}

export type UserActions = UserCreateAction;
