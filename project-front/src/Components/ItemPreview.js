import React from 'react';
import '../Styles/ItemPreview.css'
import Divider from '@material-ui/core/Divider';

const ItemPreview = ({image , title , ingredientLines}) => {
return(
    <div className="card">
        <img src={image} alt="Not Found" style={{width:"100%"}}/>
        <h1 className='title'>{title}</h1>
        <br/>
        <h2 className='ingredients'>INGREDIENTS</h2>
        <br/>
            {
                ingredientLines.map(ingredient => (
                    <div>
                    <div className='recipe-footer'>
                        {ingredient}
                    </div>
                    <Divider/>
                    </div>
                ))
            }
        
    </div>
  );
}

export default ItemPreview

