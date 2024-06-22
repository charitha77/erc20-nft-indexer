import { Flex, Heading, Select } from "@chakra-ui/react";
import { useErc } from "../context/ercContext";
import Tokens from "./Tokens";
import { useState } from "react";

function DisplayTokens() {
  const { isFetched, isLoading, hasQueried, error, results } = useErc();
  const [tokenType, setTokenType] = useState("erc20");

  return (
    <>
      {isFetched && hasQueried && !isLoading && !error && results && (
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Flex alignItems="center" gap={6} mt="8" mb={4}>
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>
              {tokenType === "erc20" && "ERC-20 token balances"}
              {tokenType === "nft" && "NFT Tokens"}
            </Heading>
            <Select
              value={tokenType}
              onChange={(e) => setTokenType(e.target.value)}
              w="7rem"
              mt={2}
            >
              <option value="erc20">ERC-20</option>
              <option value="nft">NFT</option>
            </Select>
          </Flex>
          <Tokens tokenType={tokenType} />
        </Flex>
      )}
    </>
  );
}

export default DisplayTokens;
