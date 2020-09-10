import React,{useEffect}from 'react';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CollectionOverview from '../../clothing/collection-overview/collection.overview';
import CollectionPage from '../../clothing/collection-page/collection-page';

import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching , selectCollectionLoaded} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import WithSpinner from '../../clothing/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({fetchCollectionsStart,match,isCollectionFetching,isCollectionLoaded}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart])

    // componentDidMount(){
    //      const {} =this.props;
    //      fetchCollectionsStart();
    // };
   
  return(
      <div className='shop-page'>
        <h3>Shop Page</h3>
      < Route exact path={`${match.path}`} 
         render={(props)=>
         (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} 
         render={(props)=>
         (<CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />)} />
       </div>
  )}

  const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded : selectCollectionLoaded
  });

  const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart:() => dispatch(fetchCollectionsStart())
  })
    
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);