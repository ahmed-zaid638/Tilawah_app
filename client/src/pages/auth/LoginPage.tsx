import React, { useState } from "react";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
        />
  );
};

export default LoginPage;
