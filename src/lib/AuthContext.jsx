import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const LOCAL_PUBLIC_SETTINGS = {
  id: 'local-dev',
  public_settings: {
    auth_required: false,
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState(null);
  const [appPublicSettings, setAppPublicSettings] = useState(null); // Contains only { id, public_settings }

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    setIsLoadingPublicSettings(true);
    setIsLoadingAuth(true);
    setAuthError(null);

    setAppPublicSettings(LOCAL_PUBLIC_SETTINGS);
    setUser(null);
    setIsAuthenticated(false);
    setIsLoadingPublicSettings(false);
    setIsLoadingAuth(false);
  };

  const checkUserAuth = async () => {
    setIsLoadingAuth(true);
    setUser(null);
    setIsAuthenticated(false);
    setIsLoadingAuth(false);
  };

  const logout = (_shouldRedirect = true) => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const navigateToLogin = () => {
    window.location.assign('/');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      isLoadingAuth,
      isLoadingPublicSettings,
      authError,
      appPublicSettings,
      logout,
      navigateToLogin,
      checkAppState
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
