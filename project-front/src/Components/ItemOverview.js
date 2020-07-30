import React,{useEffect} from 'react'
import ItemCard from './ItemCard'
import '../Styles/ItemOverview.css'
import {connect} from 'react-redux'
import getRecipes from '../redux/Recipes/RecipesActions'

const ItemOverview = ({recipes , getRecipes}) => {
    useEffect( ()=> {
        getRecipes()
    }, [])

    return(
        <div className='out-container'>
            <div className='overview-container'>
                {
                    recipes.length ?
                    recipes.map(({recipe} , index) => (
                        <ItemCard key={index} image={recipe.image} title={recipe.label} ingredientLines={recipe.ingredientLines}/>
                    )):
                    <div className='loading'>"Loading..."</div>
                    
                }

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        recipes : state.recipes.recipes
    }
}

const mapDispatchToPropos = dispatch => {
    return {
        getRecipes : () => dispatch(getRecipes())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToPropos
 )(ItemOverview)