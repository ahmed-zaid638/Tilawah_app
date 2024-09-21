import React, { useState } from "react";
import SignupForm from "../../components/auth/SignupForm";

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onSubmit = async () => {};

  return (
    <SignupForm
      name={name}
      email={email}
      setName={setName}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onSubmit={onSubmit}
    />
  );
};

export default SignupPage;
