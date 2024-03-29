import { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

const AuthContext = createContext();

const BASE_URL = "https://handshake-edac.onrender.com/api";

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
      return { ...state, user: null, isAuthenticated: false };
    case "deleteAccount":
      return { ...state, user: null, isAuthenticated: false };
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
      dispatch({ type: "createAccount", payload: ResponseData });
    } catch (error) {
      console.error(error);
      toast.error(error);
      setLoading(false);
    }
  }

  // async function createAccount(data) {
  //   try {
  //     console.log(data);
  //     setLoading(true);
  //     const response = await fetch(`${BASE_URL}/signup`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       dispatch({ type: "createAccount", payload: data.user });
  //     } else {
  //       const errorData = await response.json();
  //       console.log(errorData);
  //       const errorMessage = errorData?.error?.message || "An error occurred";
  //       setLoading(false);
  //       toast.error(errorMessage);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //     toast.error("Invalid credentials. Please try again.");
  //   }
  // }

  async function login(credentials) {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: "login", payload: data.user });
      } else {
        const errorData = await response.json();
        const errorMessage = errorData?.error?.message || "An error occurred";
        setLoading(false);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Invalid credentials. Please try again.");
    }
  }
  async function deleteAccount() {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/settings/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
      });

      if (response.ok) {
        dispatch({ type: "deleteAccount" });
      } else {
        const errorData = await response.json();
        const errorMessage = errorData?.error?.message || "An error occurred";
        setLoading(false);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Invalid credentials. Please try again.");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
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
