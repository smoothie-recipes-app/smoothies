import React from 'react';
import '../Styles/Item.css'
import {connect} from 'react-redux'
import ItemPreview from './ItemPreview'

const Item = ({match , recipes}) => {
    const id = match.params.id

    return (
        <div className='item-container'>
                {
                    recipes.map(({recipe}) => {
                        if( recipe.label === id)
                            return <ItemPreview image={recipe.image} title={recipe.label} ingredientLines={recipe.ingredientLines}/>

                    })
    
                    
                }

            </div>
    );
}

const mapStateToProps = state => {
    return{
        recipes : state.recipes.recipes
    }
}



export default connect(
    mapStateToProps
 )(Item)