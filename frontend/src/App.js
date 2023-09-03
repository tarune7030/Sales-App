import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSales from "./pages/AddSales";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Revenue from "./pages/Revenue";
import Sales from "./pages/Sales";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const handleUser = (val) => {
    setUser(val);
  };

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("user"));
    if (temp) {
      setUser(temp);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} handleUser={handleUser} />
        <Routes>
          <Route path="/" element={<AddSales />}></Route>
          <Route path="/addsales" element={<AddSales />}></Route>
          <Route
            path="/login"
            element={<Login handleUser={handleUser} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/revenue" element={<Revenue />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
