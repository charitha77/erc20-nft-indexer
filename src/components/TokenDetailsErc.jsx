import { Box, Tooltip, VStack, useDisclosure } from "@chakra-ui/react";
import { Utils } from "alchemy-sdk";
import { formatBalance } from "../utils";

function TokenDetailsErc({ tokenDetails, tokenBalance }) {
  const balance = Utils.formatUnits(tokenBalance, tokenDetails.decimals);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack align="flex-start" alignSelf="flex-start" mb={3}>
      <Box fontSize="xl">
        <b>Symbol:</b>&nbsp;{tokenDetails.symbol || "-"}
      </Box>
      <Box fontSize="xl">
        <b>Balance:</b>&nbsp;
        {formatBalance(tokenBalance, tokenDetails.decimals) && (
          <Tooltip hasArrow placement="top" label={balance} fontSize="lg">
            <span
              style={{ color: "rgb(128, 90, 213)", cursor: "pointer" }}
              onClick={isOpen ? onClose : onOpen}
            >
              {formatBalance(balance)}
            </span>
          </Tooltip>
        )}
      </Box>
    </VStack>
  );
}

export default TokenDetailsErc;
