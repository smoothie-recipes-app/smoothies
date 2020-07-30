import React from 'react';
import SignIn from "./SigninContainer"
import SignUp from './SignUpContainer'
import { Route , Switch} from 'react-router-dom'
import Navbar from './Navbar'
import "../Styles/App.css"
import FavouriteContainer from './Favourites'
// import ItemOverview from './ItemOverview';
import ItemContainer from './ItemContainer'

function App() {
  return (   
      <div className="App">
        <Navbar/> 
        <Switch>
        <Route exact path='/'component={ItemContainer}/>
          <Route path='/home'component={ItemContainer}/>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path='/favourites' component={FavouriteContainer}/>
        </Switch>
      </div>
  );
}

export default App;
