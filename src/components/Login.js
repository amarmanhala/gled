import React, { useEffect, useState } from "react";
import Button from "./designSystem/Button";
import Input from "./designSystem/Input";
import Link from "./designSystem/Link";
import LayoutBeta from "./LayoutBeta";
import Joi from "joi";
import Alert from "./designSystem/Alert";

export default function Login() {
  const [continueWithEmail, setContinueWithEmail] = useState(false);
  const [loginErrors, setLoginErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Joi schema
  const schema = Joi.object({
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .label("Password"),
  });

  useEffect(() => {
    console.log("PASS");
  }, [continueWithEmail]);

  useEffect(() => {
    if (email === "") {
      setLoginErrors(null);
    }
  }, [email]);

  function validate(data) {
    const result = schema.validate({ email: data });
    console.log(result);
    if (!result.error) return null;
    for (let item of result.error.details) {
      setLoginErrors(item.message);
      return true;
    }
  }
  function handleLogin(e) {
    e.preventDefault();
    if (!validate(email)) {
      setLoginErrors(null);
      setContinueWithEmail(true);
    }

    //call the server
    console.log("Submitted...");
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
              {continueWithEmail ? (
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                ></Input>
              ) : (
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></Input>
              )}

              <div className="my-3">
                {continueWithEmail ? (
                  <Button>Login</Button>
                ) : (
                  <Button>Continue with Email</Button>
                )}
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
