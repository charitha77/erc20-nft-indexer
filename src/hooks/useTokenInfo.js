import { useQuery } from "@tanstack/react-query";
import { alchemy } from "../config/alchemy";
import pLimit from "p-limit";

const limit = pLimit(10);

export function useTokenInfo(userAddress) {
  const { data, isLoading, isFetched, error, refetch } = useQuery({
    enabled: false,
    queryKey: ["tokenInfo", userAddress],
    queryFn: () => fetchTokenInfo(userAddress),
    staleTime: 5 * 60 * 1000,
  });

  return { data, isLoading, error, isFetched, refetch };
}

async function fetchTokenInfo(userAddress) {
  if (userAddress) {
    const ercData = await alchemy.core.getTokenBalances(userAddress);
    const nftData = await alchemy.nft.getNftsForOwner(userAddress);

    const ercTokenDetailsPromises = ercData.tokenBalances.map((token) =>
      limit(() => alchemy.core.getTokenMetadata(token.contractAddress))
    );

    const ercTokenDetailsObjects = await Promise.all(ercTokenDetailsPromises);
    return {
      erc20: ercData.tokenBalances,
      nfts: nftData.ownedNfts,
      ercTokenDetailsObjects,
    };
  }

  return {};
}
