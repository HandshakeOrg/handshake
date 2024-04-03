import { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const AuthContext = createContext();

// const BASE_URL = 'https://handshake-edac.onrender.com/api';
const BASE_URL = "http://localhost:5000/api";

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "createAccount":
      return { ...state, user: action.payload };
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: action.payload, isAuthenticated: false };
    case "deleteAccount":
      return { ...state, user: action.payload, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const [loading, setLoading] = useState(false);

  async function createAccount(data) {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        console.log("Server error:", errorData);
        toast.error(errorData.error);
        throw new Error(errorData.error.message);
      }

      const ResponseData = await response.json();
      console.log(ResponseData);
      dispatch({ type: "createAccount", payload: ResponseData });
      toast.success("Account created successfully");
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error);
      setLoading(false);
    }
  }

  async function login({ email, password }) {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "login", payload: data.current_user });
        setLoading(false);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData?.error;
        setLoading(false);
        toast.error(errorMessage);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  }
  async function deleteAccount(user) {
    try {
      setLoading(true); // This line is good, it sets the loading state to true before making the API call.

      const formData = new FormData();
      formData.append("user", user.id);

      fetch(`${BASE_URL}/settings/delete`, {
        method: "DELETE",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => dispatch({ type: "deleteAccount", payload: data }))
        .catch((error) => console.log(error)); // This is a general catch block for any errors that might occur during the fetch request.
    } catch (error) {
      console.error(error); // This line logs the error to the console.
      toast.error("Something went wrong. Please try again."); // This line shows a toast error message.
    } finally {
      setLoading(false); // This line sets the loading state to false after the API call, regardless of whether it was successful or not.
    }
  }

  async function logout() {
    try {
      setLoading(true);
      console.log("Attempting to log out...");

      const response = await fetch(`${BASE_URL}/logout`, {
        method: "GET",
      });

      if (!response.ok) {
        const errorMessage = response.statusText || "An error occurred";
        throw new Error(errorMessage);
      }

      dispatch({ type: "logout", payload: {} }); // Empty payload
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        createAccount,
        login,
        logout,
        loading,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was use outside the auth provider");
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
