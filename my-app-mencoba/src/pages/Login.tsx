import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cars_api_base_url: string = "http://localhost:8080";
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

        <button
          onClick={async (e) => {
            e.preventDefault();

            const payload = {
              email: email,
              password: password,
            };

            const response = await fetch(
              cars_api_base_url + '/api/auth/login',
              {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              }
            );

            const responseJson = await response.json();

            if (response.status !== 200) {
              alert('error: ' + responseJson.message);
            }

            localStorage.setItem(
              'access_token',
              responseJson.data.access_token
            );
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
