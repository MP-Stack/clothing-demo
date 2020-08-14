import React  from 'react';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../clothing/collection-overview/collection.overview';
import CollectionPage from '../../clothing/collection-page/collection-page';

import WithSpinner from '../../clothing/with-spinner/with-spinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state={
    loading:true
  };

    componentDidMount(){
      this.setState({loading:false});
    }

    render(){
      const {match} =this.props;
      // const { loading } = this.State;
  return(
      <div className='shop-page'>
        < Route exact path={`${match.path}`} 
          render={(props) =><CollectionOverviewWithSpinner isLoading={this.state.loading} {...props}/>}
          />
        <Route path={`${match.path}/:collectionId`} 
          render ={(props) =><CollectionPageWithSpinner isLoading ={this.state.loading} {...props} />} />
       </div>
  )}}
    
export default WithSpinner(ShopPage);