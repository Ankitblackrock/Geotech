import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/LoginPage/Loginpage";
import Home from "./pages/Home/Home";

function App() {
  function PrivateRoute({ children }) {
    const isLogin = localStorage.getItem("isLogin");

    return isLogin !== null && isLogin !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }
  function PublicRoute({ children }) {
    const isLogin = localStorage.getItem("isLogin");

    return isLogin !== null && isLogin !== undefined ? (
      <Navigate to="/" />
    ) : (
      children
    );
  }
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path={"/login"}
          element={
            <PublicRoute>
              <Loginpage />
            </PublicRoute>
          }
        />
        <Route
          exact
          path={"/"}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
