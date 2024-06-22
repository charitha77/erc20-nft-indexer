import { Flex, Heading, Text } from "@chakra-ui/react";
import ConnectWallet from "./ConnectWallet";

function Header() {
  return (
    <>
      <Flex
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        gap={{ base: "10", md: "0" }}
        mb={10}
        px={4}
        py={6}
      >
        <Heading
          fontSize={{ base: "3xl", sm: "4xl" }}
          mr={{ base: 0, md: "auto" }}
          textAlign={{ base: "center" }}
        >
          <Text as="span" color="purple.500" fontStyle="italic">
            ERC-20/NFT
          </Text>
          &nbsp; Indexer
        </Heading>
        <ConnectWallet />
      </Flex>
    </>
  );
}

export default Header;
