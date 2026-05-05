import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
      <button
        onClick={() => {
          navigate("/landing");
        }}
      >
        Landing
      </button>
    </div>
  );
}

export default App;
