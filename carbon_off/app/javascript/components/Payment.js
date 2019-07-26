import React from 'react'

class Payment extends React.Component {
  render() {
    return (
      <div>
        <h1>Pay Now</h1>
        <p>Your carbon footprint is ___ 
            which is worth lots of money</p>
        
        <form>
            <h3>How much would you like pay?</h3>
            <input name='enter the amount'/>
        </form>
        <button>Cancel</button>
        <button>Pay Now</button>
      </div>
    )
  }
}

export default Payment