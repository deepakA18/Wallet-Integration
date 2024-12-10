"use client";
import '@rainbow-me/rainbowkit/styles.css';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'

import Button from './components/Button';


const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [mainnet],
  ssr: true
})

const queryClient = new QueryClient();

const Home = () => {


  return(
    <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider modalSize="compact">
        <Button />
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
  )
}

export default Home;