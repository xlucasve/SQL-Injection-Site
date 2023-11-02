import React, { useState } from "react";
import { Link } from "react-router-dom";

import login from "../../api/login-api";
import "./login.css";
import Information from "../../information/pages/information";

const LoginTest = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    const resultado = await login(email);
  };

  return (
    <div>
      <div className="cont">
        <form onSubmit={loginSubmitHandler}>
          <div>
            <input
              type="text"
              id="user"
              name="user"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="pass"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="input-text"
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <p>
        Select * FROM USERS WHERE email='{email}' AND password='{pass}'
      </p>

      <Link to="/info">Mira como puedes detener esto</Link>
    </div>
  );
};

export default LoginTest;
