import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSales from "./pages/AddSales";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Revenue from "./pages/Revenue";
import Sales from "./pages/Sales";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddSales />}></Route>
          <Route path="/addsales" element={<AddSales />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/revenue" element={<Revenue />}></Route>
          <Route path="/sales" element={<Sales />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
