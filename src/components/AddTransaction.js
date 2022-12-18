import React from 'react'
import Button from './designSystem/Button'
import ButtonSecondary from './designSystem/ButtonSecondary'
import Input from './designSystem/Input'

export default function AddTransaction(props) {
  return (
    <div className="h-full w-full bg-white">
      <div className="w-[580px] mx-auto my-0 pt-12">
        <div>
          <div><h1 className="text-xl font-semibold text-textColor">What did you buy?</h1></div>
          <div className="pt-2"><Input placeholder="Coffee | Food | Burger"></Input></div>
        </div>

        <div className="pt-10">
          <div><h1 className="text-xl font-semibold text-textColor">How much did you spend?</h1></div>
          <div className="pt-2"><Input></Input></div>
        </div>

        <div className="pt-10">
          <div><h1 className="text-xl font-semibold text-textColor">Where did you spend?</h1></div>
          <div className="pt-2"><Input placeholder="Starbuck | Gas | "></Input></div>
        </div>

        <div className="pt-10">
          <div className="py-2">
          <Button>That's it!</Button>
          </div>
         
          <div className="py-2">
            <ButtonSecondary onClick={props.onClick}>Cancel</ButtonSecondary> 
          </div>
          
        </div>
        
      </div>
    </div>
  )
}
