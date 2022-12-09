import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

import React from 'react'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
        <Button>Checkout</Button>
    </div>
  )
}

export default CartDropdown