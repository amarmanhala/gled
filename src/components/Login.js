import React, { useEffect, useState } from "react";
import Button from "./designSystem/Button";
import Input from "./designSystem/Input";
import Link from "./designSystem/Link";
import LayoutBeta from "./LayoutBeta";
import Joi from "joi";
import Alert from "./designSystem/Alert";
import { login } from "../service/authService";

export default function Login() {
  const [loginErrors, setLoginErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Joi schema
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
  });

  useEffect(() => {
    if (email === "") {
      setLoginErrors(null);
    }
  }, [email]);

  function validate(email, password) {
    const result = schema.validate({ email: email, password: password });
    console.log(result);
    if (!result.error) return null;
    for (let item of result.error.details) {
      setLoginErrors(item.message);
      return true;
    }
  }

  async function handleLogin(e) {
    try {
    e.preventDefault();
    if (!validate(email, password)) {
      setLoginErrors(null);
      //call the server
        const data = await login(email, password);
    console.log("line47", data)
    } else {
      return false;
    }
  } catch (error) {
    
    if(error.code === 'ERR_NETWORK') alert(error.message)
  }
  }

  return (
    <LayoutBeta>
      <div className="flex flex-col w-[400px] p-4 rounded-md">
        <div className="w-full text-center">
          <div className="text-3xl font-bold text-textColor dark:text-white mb-1">
            Login in to Gled
          </div>
        </div>
        <div className="w-full flex flex-col mt-6">
          {loginErrors && (
            <div className="py-6">
              <Alert message={loginErrors}></Alert>{" "}
            </div>
          )}
          <div className="w-full">
            <form onSubmit={handleLogin}>
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></Input>
              <div className="h-4"></div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></Input>

              <div className="my-3">
                <Button>Login</Button>
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
  );
}
