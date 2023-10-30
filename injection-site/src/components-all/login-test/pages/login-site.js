import React, { useState } from "react";

import "./login.css";

const LoginTest = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <div className="cont">
        <form>
          <div>
            <input
              type="text"
              id="user"
              name="user"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
        </form>
      </div>
      <p>
        Select * FROM USERS WHERE userName='{userName}' AND password='{pass}'
      </p>
    </div>
  );
};

export default LoginTest;
