import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useErc } from "../context/ercContext";
import { useEffect } from "react";
import { useAccount } from "wagmi";

function Query() {
  const {
    userAddress,
    hasQueried,
    isLoading,
    error,
    setUserAddress,
    setHasQueried,
    refetch,
  } = useErc();

  const { isConnected, address } = useAccount();

  useEffect(
    function () {
      if (isConnected) {
        setUserAddress(address);
      } else {
        setUserAddress("");
      }
    },
    [isConnected, address, setUserAddress]
  );

  function handleAddressChange(e) {
    setUserAddress(e.target.value);
    setHasQueried(false);
  }

  function handleCheckBalances() {
    if (userAddress) {
      refetch();
      setHasQueried(true);
    }
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      mb={10}
      mt={{ base: 20, md: 36, lg: 44 }}
    >
      <Heading
        mb={16}
        px={{ base: 6 }}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        textAlign="center"
        color="purple.500"
      >
        Get all the ERC-20/NFT token balances of any address:
      </Heading>
      <FormControl
        isInvalid={error}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Input
          onChange={handleAddressChange}
          value={userAddress}
          placeholder="Enter an address / ENS domain"
          w={{ base: "90%", md: "80%", lg: "3xl" }}
          p={6}
          fontSize="xl"
          textAlign="center"
          border="1px"
          borderColor="purple.100"
          focusBorderColor="purple.500"
          borderRadius="lg"
          errorBorderColor="red.300"
        />
        {error && hasQueried && (
          <FormErrorMessage color="red.300" fontSize="lg">
            {error.code === "INVALID_ARGUMENT"
              ? "Invalid ENS name or address!"
              : "Unexpected error! Try again."}
          </FormErrorMessage>
        )}
      </FormControl>

      <Button
        fontSize={20}
        border="none"
        p={6}
        mt={10}
        bgColor="purple.500"
        color="purple.100"
        onClick={handleCheckBalances}
        isLoading={isLoading}
        _hover={{
          borderColor: "purple.500",
          bgColor: "purple.100",
          color: "purple.500",
        }}
        borderRadius="lg"
      >
        Check balances
      </Button>
    </Flex>
  );
}

export default Query;
