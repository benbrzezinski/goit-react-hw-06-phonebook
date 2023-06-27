import { Routes, Route, NavLink } from "react-router-dom";

const App = () => (
  <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/page2" style={{ marginLeft: 10 }}>
          Page 2
        </NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route
          path="/"
          element={<div style={{ marginTop: 10, marginLeft: 10 }}>Home</div>}
        />
        <Route
          path="/page2"
          element={<div style={{ marginTop: 10, marginLeft: 10 }}>Page 2</div>}
        />
      </Routes>
    </main>
  </>
);

export default App;
