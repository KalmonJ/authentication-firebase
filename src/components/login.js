import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const provider = new GoogleAuthProvider();

  function SignInGoogle(e) {
    e.preventDefault();

    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      console.log(user);
    });
  }

  function handleSignUp(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, login, senha)
      .then((credentials) => console.log(credentials.user.email))
      .catch((error) => console.log(error.message));
  }

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, login, senha)
      .then((credentials) => alert("login efetuado com sucesso"))
      .catch((error) => console.log(error.message));
  }

  function handleLogout(e) {
    e.preventDefault;
    signOut(auth)
      .then((reason) => alert("deslogado com sucesso"))
      .catch((error) => console.log("erro ao deslogar", error.message));
  }

  return (
    <form>
      <input
        type="text"
        placeholder="login"
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="senha"
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value);
        }}
      />
      <button onClick={handleLogout}>deslogar</button>

      <button onClick={SignInGoogle}>login</button>
      <button onClick={handleSignUp}>registrar</button>
    </form>
  );
}
