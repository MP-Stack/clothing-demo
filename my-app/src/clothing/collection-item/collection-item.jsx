import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button/custom.button';

const CollectionItem = ({id,name,imageUrl,price}) =>(
   <div className='collection-item'>
    <div className='image'
      style={{
        backgroundImage:`url(${imageUrl})`}} />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <CustomButton inverted>Add to cart</CustomButton>

    </div>
    </div>

)

export default CollectionItem;