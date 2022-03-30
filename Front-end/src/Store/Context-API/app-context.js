import React, { useCallback, useState } from "react";

const AppContext = React.createContext({
  isDataFetched: null,
  isDataFetchedHandler: () => {},
});

export default AppContext;

export const AppContextProvider = ({ children }) => {
  const [isDataFetched, setIsDataFetched] = useState(true);

  const isDataFetchedHandler = useCallback((state) => {
    setIsDataFetched(state);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDataFetched: isDataFetched,
        isDataFetchedHandler: isDataFetchedHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
