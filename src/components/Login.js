import React, {useEffect, useState} from 'react'
import Button from './designSystem/Button'
import Input from './designSystem/Input'
import Link from './designSystem/Link'
import LayoutBeta from './LayoutBeta';

export default function Login() {

  const [continueWithEmail, setContinueWithEmail] = useState(false);
  const [loginErrors, setLoginErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("PASS")
  }, [continueWithEmail]);

  function validate() {

  }
  function handleLogin(e) {
    e.preventDefault();
    setLoginErrors("done");
  //call the server
  console.log("Submitted...")
  }
  return (
   <LayoutBeta>
     <div className="flex flex-col w-[400px] p-4 rounded-md">
        <div className="w-full text-center">
        <div className="text-3xl font-bold text-textColor dark:text-white mb-1">Login in to Gled</div>
        </div>
        <div className="w-full flex flex-col mt-6">
         <div className="w-full">
          <form onSubmit={handleLogin}>
          {
            continueWithEmail ? (<Input type="password" placeholder="Password"value={password} onChange={(event) => setPassword(event.target.value)}></Input>) : (<Input type="email" placeholder="Email address" value={email} onChange={(event) => setEmail(event.target.value)} isThereAnyError={loginErrors}></Input>)
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
