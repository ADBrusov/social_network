const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
};

function usersPageReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return {...user, followed: true,}
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userID) {
            return {...user, followed: false,}
          }
          return user;
        }),
      };
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]};
    default:
      return state;
  }
}

export const followUserActionCreator = (userID) => ({type: FOLLOW, userID});
export const unfollowUserActionCreator = (userID) => ({type: UNFOLLOW, userID});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersPageReducer;