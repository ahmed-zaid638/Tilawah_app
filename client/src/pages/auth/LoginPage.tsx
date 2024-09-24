import React, { FormEvent, useState } from "react";
import LoginForm from "../../components/auth/LoginForm";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
      }
    }
  };

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      onSubmit={onSubmit}
      setPassword={setPassword}
    />
  );
};

export default LoginPage;
