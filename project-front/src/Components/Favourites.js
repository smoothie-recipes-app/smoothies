import React,{useEffect} from 'react'
import ItemCard from './ItemCard'
import {connect} from 'react-redux'
import "../Styles/Favourites.css"
import {fetchFavs} from '../redux/Favourites/FavouritesActions'


import '../Styles/ItemOverview.css'

const FavouriteContainer = ({user , fetchFavs , favourites}) => {
    useEffect(() => {
        fetchFavs({
            _id : user._id})
    }, [])

    return(
        <div className='out-container'>
            <div className='favourite-container'>
            {
                    favourites.length ?
                    favourites.map(favourite => (
                        <ItemCard image={favourite.image} title={favourite.title} ingredientLines={favourite.ingredientLines}/>
                    )):
                    <div className='loading'>No Favourites Found</div>
                    
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        user : state.login.user,
        favourites : state.fetchFavourites.favourites
    }
}

const mapDispatchToProps = dispatch => {
    return{
      fetchFavs : (data) => dispatch(fetchFavs(data))
    }
  }
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(FavouriteContainer)