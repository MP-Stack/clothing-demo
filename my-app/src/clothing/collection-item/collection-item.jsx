import React from 'react';
import './collection-item.scss';
import CustomButton from '../custom-button/custom.button';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';

const CollectionItem = ({item,addItem}) =>{
  const {imageUrl,price,name}= item ;
  return(
      <div className='collection-item'>
        <h4>Collection Item Page</h4>
       <div className='image'
           style={{
                 backgroundImage:`url(${imageUrl})`}} />
       <div className='collection-footer'>
         <span className='name'>{name}</span>
          <span className='price'>{price}</span>
         <CustomButton onClick={()=>addItem(item)} inverted>Add to cart</CustomButton>

    </div>
    </div>

)}

const mapDispatchToProps = (dispatch) =>({
  addItem: (item )=>dispatch(addItem(item))
})

export default  connect(null,mapDispatchToProps) (CollectionItem);