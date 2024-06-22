import { Box, Center, Image } from "@chakra-ui/react";

const defaultLogoErc =
  "https://placehold.jp/40px/ebc5e4/695d6a/100x100.png?text=NA";

function TokenLogoErc({ tokenLogo }) {
  return (
    <Box h="130px" display="flex" alignItems="center">
      <Center>
        <Box bgColor="pink.300" w="20" h="20" borderRadius="50%">
          <Image src={tokenLogo || defaultLogoErc} w="20" borderRadius="50%" />
        </Box>
      </Center>
    </Box>
  );
}

export default TokenLogoErc;
