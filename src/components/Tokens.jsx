import { SimpleGrid, Text } from "@chakra-ui/react";
import Token from "./Token";
import { useErc } from "../context/ercContext";
import TokenDetailsErc from "./TokenDetailsErc";
import TokenDetailsNft from "./TokenDetailsNft";
import TokenLogoNft from "./TokenLogoNft";
import TokenLogoErc from "./TokenLogoErc";

function Tokens({ tokenType }) {
  const { ercTokenDetailsObjects, results } = useErc();

  return (
    <>
      {tokenType === "nft" && results.nfts?.length === 0 && (
        <Text mt="10" fontSize="lg">
          No NFT&apos;s are associated with this address
        </Text>
      )}
      <SimpleGrid
        columns={{ base: 1, "550px": 2, lg: 3, "2xl": 3, "3xl": 4, "4xl": 5 }}
        spacing={14}
        width={{ base: "70vw", sm: "60vw", "550px": "80vw", "2xl": "60vw" }}
        mt="6"
      >
        {tokenType === "erc20" &&
          results.erc20?.map((t, i) => (
            <Token key={i}>
              <TokenLogoErc tokenLogo={ercTokenDetailsObjects[i].logo} />
              <TokenDetailsErc
                tokenDetails={ercTokenDetailsObjects[i]}
                tokenBalance={t.tokenBalance}
              />
            </Token>
          ))}
        {tokenType === "nft" &&
          results.nfts?.map((t, i) => (
            <Token key={i}>
              <TokenLogoNft tokenLogo={t.image.pngUrl} />
              <TokenDetailsNft name={t.name} collection={t.collection?.name} />
            </Token>
          ))}
      </SimpleGrid>
    </>
  );
}

export default Tokens;
