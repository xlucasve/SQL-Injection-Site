import { Routes, Route, Navigate } from "react-router-dom";
import LoginTest from "./components-all/login-test/pages/login-site";
import Information from "./components-all/information/pages/information";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginTest />} />
        <Route path="/info" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
