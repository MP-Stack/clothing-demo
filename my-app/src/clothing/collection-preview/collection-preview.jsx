import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../../clothing/collection-item/collection-item'

const CollectionPreview = ({title,items}) => (
  <div className='collection-preview' >
      <h1 className='title'>{title}</h1>
      <div className='preview'>
          {items
              .map((item) => (
               <CollectionItem key={item.id} item={item} />
))}
      </div>
  </div>
)

export default CollectionPreview;
