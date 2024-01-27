import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import One from "./pages/One";
import Two from "./pages/Two";
import Three from "./pages/Three";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Router>
        {" "}
        <Routes>
          {" "}
          <Route
            path="/"
            element={
              <Layout>
                <Two />
              </Layout>
            }
          />{" "}
          <Route
            path="/one"
            element={
              <Layout>
                <One />
              </Layout>
            }
          />{" "}
          <Route
            path="/three"
            element={
              <Layout>
                <Three />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
