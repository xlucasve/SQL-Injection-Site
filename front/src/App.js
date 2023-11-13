import { Routes, Route, Navigate } from "react-router-dom";
import Information from "./components-all/information/pages/information";
import "./App.css";
import SignIn from "./components-all/login-test/pages/login-site-complete";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
