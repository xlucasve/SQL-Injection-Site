import { Routes, Route, Navigate } from "react-router-dom";
import LoginTest from "./components-all/login-test/pages/login-site";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginTest />} />
      </Routes>
    </div>
  );
}

export default App;
