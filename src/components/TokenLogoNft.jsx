import { Box, Image } from "@chakra-ui/react";

const defaultLogoNft =
  "https://placehold.jp/40px/ebc5e4/695d6a/600x300.png?text=No Image";

function TokenLogoNft({ tokenLogo }) {
  return (
    <Box>
      <Image
        src={tokenLogo || defaultLogoNft}
        fallbackSrc={defaultLogoNft}
        alt="nft image"
        position="absolute"
        top="0"
        left="0"
        right="0"
        borderTopRadius="2xl"
        w="100%"
        h="170"
      />
    </Box>
  );
}

export default TokenLogoNft;
