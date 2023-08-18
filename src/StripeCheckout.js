import React from 'react'
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {


    const navigate = useNavigate()
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });

      


    }).catch((error)=> setTimeout(()=> {navigate('/')}, 1500) );
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="my_PUBLISHABLE_stripekey"
      />
    )
  }
}