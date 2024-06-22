import { Button } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function ConnectWallet() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        mounted,
        chain,
        openConnectModal,
        openAccountModal,
        openChainModal,
      }) => {
        const connected = mounted && account && chain;

        return (
          <div
            {...(!mounted && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              const buttonStyles = {
                bgColor: "gray.900",
                color: "purple.500",
                borderColor: "purple.500",
                variant: "outline",
                _hover: {
                  bg: "purple.500",
                  color: "purple.100",
                },
                borderRadius: "lg",
                fontSize: "lg",
              };

              if (!connected) {
                return (
                  <Button onClick={openConnectModal} {...buttonStyles}>
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} {...buttonStyles}>
                    Wrong network
                  </Button>
                );
              }
              return (
                <Button onClick={openAccountModal} {...buttonStyles}>
                  {account.displayName}{" "}
                  {account.displayBalance ? `(${account.displayBalance})` : ""}
                </Button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default ConnectWallet;
