import "./App.css";
import LoginOrSign from "./Page/LoginOrSign";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <ToastProvider>
        <Router>
        <Routes>
          <Route path="/" element={<LoginOrSign />} />
          <Route path="/home" element={<HomePage/>} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
