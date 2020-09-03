import React from 'react';
import './collection.overview.scss';

import CollectionPreview from  '../../clothing/collection-preview/collection-preview';

import {connect} from 'react-redux';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';

const CollectionOverview =({collections}) =>(
  <div className='collection-overview'>
    <h1>Collection Overview Page</h1>
    {
        collections.map(({id, ...otherCollectionProps}) => (
         <CollectionPreview key={id} {...otherCollectionProps}/> ))
  }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections:selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);