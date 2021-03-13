import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./core/components/Navbar/Navbar";
import Routes from "./core/routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
