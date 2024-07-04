import React, { createContext, useState, useEffect, useContext } from 'react';
import jwt from 'jsonwebtoken';
import { toast } from 'sonner';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt.decode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = (token) => {
    try {
      const decoded = jwt.decode(token);
      setUser(decoded);
      localStorage.setItem('token', token);
      toast('Login successful', { description: 'Welcome back!' });
    } catch (error) {
      console.error('Invalid token:', error);
      toast('Login failed', { description: 'Invalid token provided.' });
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    toast('Logout successful', { description: 'You have been logged out.' });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);