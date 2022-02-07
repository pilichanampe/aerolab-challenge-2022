import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) { 
  const [name, setName] = useState();
  const [points, setPoints] = useState();
  const [loading, setLoading] = useState();

  return (
    <UserContext.Provider
      value={{ name, points, setPoints, name, setName, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
};