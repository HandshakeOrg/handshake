import { createContext, useContext, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const BASE_URL = 'https://handshake-edac.onrender.com/api';
// const BASE_URL = 'http://localhost:5000/api';

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'createAccount':
      return { ...state, user: action.payload };
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false };
    case 'deleteAccount':
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error('Unknown action');
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [loading, setLoading] = useState(false);

  async function createAccount(data) {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Server error:', errorData);
        toast.error(errorData.error);
        throw new Error(errorData.error.message);
      }

      const ResponseData = await response.json();
      console.log(ResponseData);
      dispatch({ type: 'createAccount', payload: ResponseData });
      toast.success('Account created successfully');
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
      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        body: formData, // FormData will set the Content-Type to 'multipart/form-data' automatically
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({ type: 'login', payload: data.current_user });
      } else {
        const errorData = await response.json();
        console.log(errorData);
        const errorMessage = errorData?.error;
        setLoading(false);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Invalid credentials. Please try again.');
    }
  }

  // async function deleteAccount(user) {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`${BASE_URL}/settings/delete`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ user: user.id }),
  //     });

  //     if (response.ok) {
  //       dispatch({ type: "deleteAccount" });
  //     } else {
  //       const errorData = await response.json();
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

  async function deleteAccount(user) {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('user', user.id);

      const response = await fetch(`${BASE_URL}/settings/delete`, {
        method: 'DELETE',
        body: formData,
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        dispatch({ type: 'deleteAccount' });
      } else {
        const errorData = await response.json();
        const errorMessage = errorData?.error?.message || 'An error occurred';
        setLoading(false);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Invalid credentials. Please try again.');
    }
  }

  function logout() {
    dispatch({ type: 'logout' });
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
    throw new Error('AuthContext was use outside the auth provider');
  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
