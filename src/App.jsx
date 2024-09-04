import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
          <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
