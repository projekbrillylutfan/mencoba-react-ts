import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login Page</h1>

      <form action="">
        <input
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
            console.log("isi email", email);
          }}
          type="text"
          placeholder="masukkan email"
        />
        <input
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
            console.log("isi password", password);
          }}
          type="password"
          placeholder="masukkan password  "
        />

        <button>Login</button>
      </form>
    </div>
  );
}
