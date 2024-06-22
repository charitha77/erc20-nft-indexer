import { createContext, useContext, useState } from "react";

import { useTokenInfo } from "../hooks/useTokenInfo";

const ErcContext = createContext();

function ErcProvider({ children }) {
  const [userAddress, setUserAddress] = useState("");
  const [hasQueried, setHasQueried] = useState(false);

  const {
    data: { erc20, nfts, ercTokenDetailsObjects } = {},
    isLoading,
    error,
    isFetched,
    refetch,
  } = useTokenInfo(userAddress);

  return (
    <ErcContext.Provider
      value={{
        userAddress,
        hasQueried,
        results: erc20 && nfts && { erc20, nfts },
        ercTokenDetailsObjects,
        isLoading,
        isFetched,
        error,
        refetch,
        setUserAddress,
        setHasQueried,
      }}
    >
      {children}
    </ErcContext.Provider>
  );
}

function useErc() {
  const context = useContext(ErcContext);
  if (context === undefined)
    throw new Error("ErcContext was used outside of ErcProvider!");
  return context;
}

export { ErcProvider, useErc };
