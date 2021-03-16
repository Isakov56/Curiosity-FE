import logo from './logo.svg';
import './App.scss';
import SignUp from './components/auth/SignUp'
import LogIn from './components/auth/LogIn'
import Main from './components/Main'
import Profile from './components/pages/profile/Profile'
import Home from './components/pages/home/Home'
import Questions from './components/pages/questions/Questions'
import NavBar from './components/navbar/NavBar'
import StickyBox from "react-sticky-box"
import {Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <StickyBox style={{zIndex: "99"}}>
        <NavBar/>
      </StickyBox>
      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/home" exact component={Home} />

      <Route path="/questions" exact component={Questions} />

      <Route path="/login" exact component={LogIn} />
      <Route path='/signup' exact component={SignUp} />
    </div>
  );
}

export default App;
