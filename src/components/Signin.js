import React, { useEffect, useState } from "react";
import Button from "./designSystem/Button";
import Input from "./designSystem/Input";
import Link from "./designSystem/Link";
import LayoutBeta from "./LayoutBeta";
import Joi from "joi";
import Alert from "./designSystem/Alert";
import * as Sentry from "@sentry/react";
import { useNavigate } from "react-router-dom";
import { register } from "../service/userService";

export default function Signin() {
  const [loginErrors, setLoginErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //Joi schema
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().label("Name"),
  });

  function validate(user) {
    console.log("this is an object", user);
    const result = schema.validate({ email: user.email, password: user.password, name: user.name });
    console.log(result);
    if (!result.error) return null;
    for (let item of result.error.details) {
      setLoginErrors(item.message);
      return true;
    }
  }

  const registeration = (e) => {
    e.preventDefault();
    try {
      if (!validate({email, password, name })) {
        setLoginErrors(null);
        //call the server
        const data = register({email, password, name });
        console.log(data);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        setLoginErrors(error.response.data);
      } else {
        Sentry.captureException(error);
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <LayoutBeta>
      <div className="flex flex-col w-[400px] p-4 rounded-md">
        <div className="w-full text-center">
          <div className="text-3xl font-bold text-textColor dark:text-white mb-1">
            Create an account
          </div>
        </div>
        <div className="w-full flex flex-col mt-6">
          {loginErrors && (
            <div className="py-6">
              <Alert message={loginErrors}></Alert>{" "}
            </div>
          )}
          <div className="w-full">
            <form onSubmit={registeration}>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></Input>
              <div className="h-4"></div>
              <Input
                type="text"
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
              <div className="h-4"></div>

              <div className="my-3">
                <Button>Sign in</Button>
              </div>
            </form>
            <div className="w-full text-center my-6">
              <Link href="/login">Already have an account? Login</Link>
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
