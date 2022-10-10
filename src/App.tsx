import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Content } from "./components/Content";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { PrivateRoute } from "./components/PrivateRoute";
import "./styles/App.scss";

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/"
            element={
              <PrivateRoute authenticated={authenticated}>
                <Content />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
