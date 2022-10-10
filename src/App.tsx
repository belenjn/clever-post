import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Content } from "./components/Content";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import {PrivateRoute} from "./components/PrivateRoute";
import "./styles/App.scss";

function App() {

  const [authenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<PrivateRoute component={<Content/>} auth={authenticated}/>} /> */}
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated}/>} />
        <Route path="/" element={<Content/>} />
        <Route path="*" element={<NotFound/>} />
          {/* <Route path="*" element={<NotFound />} /> */} 
          //TODO: hacer pagina 404
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
