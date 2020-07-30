import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../Styles/ItemCard.css'
import { withRouter } from "react-router";
import {uploadFavs} from '../redux/Favourites/FavouritesActions'
import {connect} from 'react-redux'
import {compose} from 'redux'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginTop:'30'
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ItemCard = ({match , history , image , title , ingredientLines , uploadFavs , user}) => {


  const classes = useStyles();

  const handleFavourite = () => {
    console.log(ingredientLines)
    if(!isEmpty(user)) {
    if(isValid(title , image , ingredientLines)){
      const data = {
        title,
        image,
        ingredientLines,
        user : user._id
      }
      uploadFavs(data)
    }
  }else{
    alert("Login to add to favourites")
  }

  }
  const isEmpty = (obj) => {
    for(var i in obj) return false; 
    return true;
  }
  
  const isValid = (title , image , ingredientLines) => (title && image && ingredientLines)

  return (
    <div className='card-container' >
    <Card className={classes.root} >
      <div onClick={() => history.push(`${match.path}/${title}`)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {title.charAt(0)}
            </Avatar>
          }
          title={title}
          // subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={image}
          // image={require('../Images/unnamed.jpg')}
          title="Paella dish"
        />
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
          <FavoriteIcon onClick={handleFavourite}/>
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}

const mapStateToProps = state =>{
  return{
    user : state.login.user
  }
}

const mapDispatchToProps = dispatch => {
  return{
    uploadFavs : (data) => dispatch(uploadFavs(data))
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ItemCard);