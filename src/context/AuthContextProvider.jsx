import { createContext, useState } from 'react';

const AuthContext = createContext();

const _isLogin = (email, password) => {
  const VALID_USERS = [
    {
      email: 'qwe@qwe.com',
      password: '#qwe',
    },
    {
      email: 'abc@abc.com',
      password: 'a&b!_',
    },
    {
      email: 'zxc@zxc.com',
      password: '1abc',
    },
  ];
  const userEmails = VALID_USERS.map((user) => user.email);
  if (userEmails.includes(email)) {
    const foundUser = VALID_USERS.filter((user) => user.email === email);
    return foundUser.password === password;
  }
  return false;
};

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const authenticate = (user, password) => {
    const isLoggedIn = _isLogin(user, password);
    setIsAuth(isLoggedIn);
  };

  const logout = () => {
    setIsAuth(false);
  };

  const values = {
    isAuth,
    authenticate,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
