import React from 'react';
import './collection-page.scss';
import {connect} from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../collection-item/collection-item';

const CollectionPage = ({collection}) => {
    console.log(collection)
    const {title,items} = collection;
  return(
  <div className='collection-page'>
    <h4>Collection Page</h4>
      <h1 className='title'>{title}</h1>
      <div className='items'>
        {
          items.map(item=>(<CollectionItem key={item.id} item={item} />))
        }
      </div>
  </div>
)}

const mapStateToProps = (state,ownProps) =>({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);