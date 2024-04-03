import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinners/Spinner";
import { AuthProvider } from "./contexts/AuthContext";
import MainApp from "./pages/MainApp";
import User from "./components/User/User";
import ProtectedRoute from "./pages/ProtectedRoute";
const HomePage = lazy(() => import("./pages/HomePage"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const PostJob = lazy(() => import("./components/PostJob/PostJob"));
const BodySection = lazy(() => import("./components/BodySection/BodySection"));
const CallToAction = lazy(() => import("./pages/CallToAction"));

// const BASE_URL = 'https://handshake-edac.onrender.com/api';
// const BASE_URL = "http://localhost:5000/api";

function App() {
  // let { isAuthenticated } = useAuth();

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/login`, {
  //         credentials: "include",
  //         method: "POST",
  //       });

  //       if (response.ok) {
  //         isAuthenticated = true;
  //       } else {
  //         isAuthenticated = false;
  //       }
  //     } catch (error) {
  //       console.error("Error checking authentication:", error);
  //       isAuthenticated = false;
  //     }
  //   };

  //   checkAuthentication();
  // }, [isAuthenticated]);
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="/app" element={<MainApp />}>
              <Route index element={<BodySection />} />
              <Route
                path="/app/postjob"
                element={<ProtectedRoute element={<PostJob />} />}
              />
              <Route
                path="/app/profile"
                element={<ProtectedRoute element={<User />} />}
              />
              <Route
                path="/app/apply/:user_id"
                element={<ProtectedRoute element={<CallToAction />} />}
              />
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
