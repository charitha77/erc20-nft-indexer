import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet } from "wagmi/chains";

export const config = getDefaultConfig({
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECTID,
  chains: [mainnet],
});
