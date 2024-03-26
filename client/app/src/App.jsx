import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./components/Spinners/SpinnerFullPage";
import LandNav from "./components/Landing/LandNav";

// const HomePage = lazy(() => import("./pages/HomePage"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
// const PostJob = lazy(() => import("./components/PostJob/PostJob"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route index element={<LandNav />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
