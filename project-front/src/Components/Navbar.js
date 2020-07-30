import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../Styles/Navbar.css'
import {connect} from 'react-redux'
import {logoutUser} from '../redux/UserLogin/LoginActions'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({user , logoutUser}) =>{
  const classes = useStyles();


 const handleLogout = () =>{
   console.log(user)
  logoutUser()
 }

 const isEmpty = (obj) => {
  for(var i in obj) return false; 
  return true;
}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/home'>
            <HomeIcon fontSize='large'/>
            </Link>
          </Typography>

          {
            !isEmpty(user) ?
            <div>
              <Link to='/favourites'>
              <Button className='nav-button' color="inherit">Favourites</Button>
              </Link>
              <Link to='/signin'>
                <Button className='nav-button' color="inherit" onClick={handleLogout}>Logout</Button>
              </Link>
            </div>
            :
            <Link to='/signin'>
              <Button className='nav-button' color="inherit">Login</Button>
            </Link>
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    user : state.login.user
  }
}
const mapDispatchToProps = dispatch => {
  return{
    logoutUser : () => dispatch(logoutUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)