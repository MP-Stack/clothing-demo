import React from 'react';
import './collection.overview.scss';

import CollectionPreview from  '../../clothing/collection-preview/collection-preview';

import {connect} from 'react-redux';
import {selectShopCollections} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';

const CollectionOverview =({collections}) =>(
  <div className='collection-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) => (
         <CollectionPreview key={id} {...otherCollectionProps}/> ))
  }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections:selectShopCollections
})

export default connect(mapStateToProps)(CollectionOverview);