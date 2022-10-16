import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Content } from "./components/Content";
import { Login } from "./components/Login";
import { NotFound } from "./components/NotFound";
import { PrivateRoute } from "./routes/PrivateRoute";
import "./styles/App.scss";

function App() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
          <Route
            path="/"
            element={
              <PrivateRoute authenticated={authenticated}>
                <Content setAuthenticated={setAuthenticated}/>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
