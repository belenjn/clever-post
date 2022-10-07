import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */} //TODO: hacer pagina
          404
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
