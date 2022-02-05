import { createContext, useContext } from 'react';

const AppContext = createContext();
export function AppWrapper({ children }) {
  const values = {}
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
};