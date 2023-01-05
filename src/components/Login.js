import React, {useEffect, useState} from 'react'
import Button from './designSystem/Button'
import Input from './designSystem/Input'
import Link from './designSystem/Link'
import LayoutBeta from './LayoutBeta';

export default function Login() {
  const [continueWithEmail, setContinueWithEmail] = useState(false);
  useEffect(() => {
    console.log("PASS")
  }, [continueWithEmail])
  return (
   <LayoutBeta>
     <div className="flex flex-col w-[400px] p-4 rounded-md">
        <div className="w-full text-center">
        <div className="text-3xl font-bold text-textColor dark:text-white mb-1">Login in to Gled</div>
        </div>
        <div className="w-full flex flex-col mt-6">
         <div className="w-full">
          <form onSubmit={console.log("Submitted...")}>
          {
            continueWithEmail ? (<Input type="password" placeholder="Password"></Input>) : (<Input type="text" placeholder="Email address"></Input>)
          }
         
          <div className="my-3">
            {
              continueWithEmail ? (<Button>Login</Button>) : (<Button onClick={() => setContinueWithEmail(!continueWithEmail)}>Continue with Email</Button> )
            }
            </div>
          </form>
        
            
          
          <div className="w-full text-center my-6">
        <Link href="/signin">Don't have an account? Sign in</Link>
       </div>
          <div className="w-full text-center my-6">
        <Link href="/">Continue as Guest</Link>
       </div>
       
         </div>
        </div>
       
      </div>
   </LayoutBeta>
  )
}
