import React, { FormEvent, useState } from "react";
import SignupForm from "../../components/auth/SignupForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase.ts";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<Element>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      if (auth.currentUser) {
        await setDoc(doc(db, "Users", auth.currentUser.uid), {
          name: name,
          email: email,
          password: password,
          createdAt: new Date(),
        });
        setName("");
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

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
