import { createContext, useContext, useState } from 'react';
import { getUser } from '../components/common/getUser';

const UserContext = createContext();

export function UserProvider({ children }) { 
  const [name, setName] = useState();
  const [points, setPoints] = useState();
  getUser().then(userData => {
    setName(userData.name);
    setPoints(userData.points);
  });

  return (
    <UserContext.Provider
      value={{name, points}}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
};