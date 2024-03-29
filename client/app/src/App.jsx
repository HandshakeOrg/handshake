
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinners/Spinner";
import { AuthProvider } from "./contexts/AuthContext";

// import ProtectedRoute from "./pages/ProtectedRoute";
import MainApp from "./pages/MainApp";
import User from "./components/User/User";
const HomePage = lazy(() => import("./pages/HomePage"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const PostJob = lazy(() => import("./components/PostJob/PostJob"));
// import BodySection from "../components/BodySection/BodySection";
const BodySection = lazy(() => import("./components/BodySection/BodySection"));


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <Suspense fallback={<Spinner />}>
          <Routes>

            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route
              path="/app"
              element={
                // <ProtectedRoute>
                <MainApp />
                // </ProtectedRoute>
              }
            >
              <Route index element={<BodySection />} />
              <Route path="/app/postjob" element={<PostJob />} />
              <Route path="/app/profile" element={<User />} />
            </Route>

            <Route index element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
