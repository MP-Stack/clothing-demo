import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
  const priceForStripe = price * 100;
  const publishableKey="pk_test_51HErd4HTXBlVl93Ot5Ks8a7mxfTXJe3Z1e7Ps4P2PW2mJRxclXUC6eV7LuJZobuRRKuTZQm8ZS9auBX6y1dmhTBq00Twc5HIq8";

  const onToken = token =>{
    alert ("Payment Successful")
  }

  return(
    <StripeCheckout 
      label='Pay Now'
      name="BRAIN'SKART Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;