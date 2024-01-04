import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Header from "./Component/Header";
import Arts from "./Component/Arts";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Outlet />
              </>
            }
          >
            <Route index element={<Arts />} />
            <Route path="about" element={<Arts />} />
            <Route path="signup" element={<Arts />} />
            <Route path="contact" element={<Arts />} />
            <Route path="login" element={<Arts />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
