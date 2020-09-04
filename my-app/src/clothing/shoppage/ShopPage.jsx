import React  from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../clothing/collection-overview/collection.overview';
import CollectionPage from '../../clothing/collection-page/collection-page';
import {firestore,convertCollectionsSnapshotToMap} from '../../clothing/firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
import WithSpinner from '../../clothing/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state={
    loading:true
  };

  unsubscribeFromSnapshot = null;

    componentDidMount(){
      const {updateCollections} = this.props;
      const collectionRef = firestore.collection('collections');

      this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{  
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap)  
        this.setState({loading:false});    
        });   
    }
   

    render(){
      const {match} =this.props;
      const { loading } = this.state;
  return(
      <div className='shop-page'>
        <h3>Shop Page</h3>
      < Route exact path={`${match.path}`} 
         render={(props)=>
         (<CollectionOverviewWithSpinner isLoading={loading} {...props} />)} />
        <Route path={`${match.path}/:collectionId`} 
         render={(props)=>
         (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
       </div>
  )}}

  const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap =>dispatch(updateCollections(collectionsMap))
  })
    
export default connect(null,mapDispatchToProps)(ShopPage);