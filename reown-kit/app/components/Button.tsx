import React from 'react'
import { useAppKit } from '@reown/appkit/react'

export default function Button(){

    const {open,close} = useAppKit();

    const openModal = () =>{
        open();
    }

  return (
    <div>
        <button type='button' onClick={openModal}>
            Connect Wallet
        </button>
      
    </div>
  )
}


