import {User} from '../../model/user';
import {UserActions, userActionsType} from './user.actions';

export const USER_REDUCER_NODE = 'user';

export interface UserState {
  usersList: User[];
}

const initialState: UserState =  {
  usersList: [],
};

// @ts-ignore
export const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userActionsType.create:
      return  {
        ...state,
        usersList: [
          ...state.usersList,
          {
            first_name: action.payload.name
          }
        ]
      };
    default:
      return state;
  }
};
