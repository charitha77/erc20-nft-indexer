import { Box, VStack } from "@chakra-ui/react";

function TokenDetailsNft({ name, collection }) {
  return (
    <VStack mt="170px" alignSelf="flex-start" alignItems="flex-start">
      <Box fontSize="xl">
        <b>Name: </b> {name}
      </Box>
      <Box fontSize="xl">
        <b>Collection: </b>
        {collection || "-"}
      </Box>
    </VStack>
  );
}

export default TokenDetailsNft;
