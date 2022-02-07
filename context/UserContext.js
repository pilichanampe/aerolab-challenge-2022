import { createContext, useContext, useState } from 'react';
import { getUser } from '../components/common/getUser';

const UserContext = createContext();

export function UserProvider({ children }) { 
  const [name, setName] = useState();
  const [points, setPoints] = useState();
  const [loading, setLoading] = useState();
  const [products, setProducts] = useState([]);

  // getUser()
  // .then(userData => {
  //   debugger;
  //   setLoading(true);
  //   setName(userData.name);
  //   setPoints(userData.points);
  // })
  // .catch(error => {
  //   console.log(error.message);
  // })
  // .finally(() => {
  //   setLoading(false);
  // });

  return (
    <UserContext.Provider
      value={{ name, points, setPoints, loading, setLoading, name, setName, products, setProducts }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
};