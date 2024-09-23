import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();  

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage
  const loadUserFromLocalStorage = () => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  };

  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  // Helper function to get all users from localStorage
  const getAllUsersFromLocalStorage = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  };

  // Helper function to save all users to localStorage
  const saveAllUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  const loginUser = async (email, password) => {
    try {
      const users = getAllUsersFromLocalStorage();
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      return false;
    }
  };

  const registerUser = async (userData) => {
    try {
      const users = getAllUsersFromLocalStorage();
      const existingUser = users.find(user => user.email === userData.email);

      if (existingUser) {
        throw new Error('User already exists');
      }

      users.push(userData);
      saveAllUsersToLocalStorage(users);

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData)); // Save user to localStorage
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const updateUserInLocalStorage = async (updatedUser) => {
    try {
      const users = getAllUsersFromLocalStorage();
      const userIndex = users.findIndex(user => user.id === updatedUser.id);

      if (userIndex === -1) {
        throw new Error('User not found');
      }

      users[userIndex] = updatedUser;
      saveAllUsersToLocalStorage(users);

      setUser(updatedUser); // Update state with the new user data
      localStorage.setItem('user', JSON.stringify(updatedUser)); // Update localStorage
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  const isAuthenticated = !!user; // true if user exists, false otherwise

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loginUser, registerUser, logoutUser, updateUserInLocalStorage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
