import './App.scss';
import { useEffect } from 'react'
import SignUp from './components/auth/SignUp'
import LogIn from './components/auth/LogIn'
import Main from './components/Main'
import Profile from './components/pages/profile/Profile'
import Home from './components/pages/home/Home'
import Questions from './components/pages/questions/Questions'
import NavBar from './components/navbar/NavBar'
import SpecificQuestion from './components/pages/question/SpecificQuestion'
import StickyBox from "react-sticky-box"
import {Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from "react-redux";
import {
  fetchCurrentUser,
  editCurrentUserInfo,
  fetchAllUsers,
  fetchCurrentUserPosts,
} from "./store";

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    // editCurrentUserInfo: (userInfo, handleClose) =>
    //   dispatch(editCurrentUserInfo(userInfo, handleClose)),
    // fetchCurrentUserPosts: () => dispatch(fetchCurrentUserPosts()),
  };
};


function App({currentUser, fetchCurrentUser}) {
  
  useEffect(() => {
    fetchCurrentUser();
    fetchAllUsers();
    //fetchCurrentUserPosts()
    // console.log(localStorage.getItem("JWTToken"), "my TTTTTTTTTTTTTTTT");
  }, []);

  return (
    <div className="App">
      <StickyBox style={{zIndex: "99"}}>
        <NavBar/>
      </StickyBox>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/questions/:questionId" component={SpecificQuestion} />
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/home" exact component={Home} />

      <Route path="/questions" exact component={Questions} />

      <Route path="/login" exact component={LogIn} />
      <Route path='/signup' exact component={SignUp} />
      {/* <button onClick={() => dispatch(fetchUser())}>click</button> */}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
