import {connect} from "react-redux";
import {followUserActionCreator, setUsersActionCreator, unfollowUserActionCreator} from "../../redux/usersPageReducer";
import Users from "./Users";


const mapStateToProps = (state) => ({users: state.usersPage.users});
const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userID) => dispatch(followUserActionCreator(userID)),
    unfollowUser: (userID) => dispatch(unfollowUserActionCreator(userID)),
    setUsers: (users) => dispatch(setUsersActionCreator(users)),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);