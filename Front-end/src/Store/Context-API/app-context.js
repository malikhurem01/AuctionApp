import React, { useCallback, useState } from "react";

const AppContext = React.createContext({
  isDataLoading: null,
  isDataLoadingHandler: () => {},
});

export default AppContext;

export const AppContextProvider = ({ children }) => {
  const [isDataLoading, setIsDataLoading] = useState(false);

  const isDataLoadingHandler = useCallback((state) => {
    setIsDataLoading(state);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isDataLoading: isDataLoading,
        isDataLoadingHandler: isDataLoadingHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
