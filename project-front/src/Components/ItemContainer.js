import React from 'react';
import {Route} from 'react-router-dom'
import ItemOverview from './ItemOverview'
import Item from './Item';

const ItemContainer = ({match}) => {
    console.log(match.path)
    return(
        <div>
            <Route exact path={match.path} component={ItemOverview}/>
            <Route path={`${match.path}/:id`} component={Item}/>
        </div>
    )
}

export default ItemContainer