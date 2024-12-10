import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const Button = () => {
  return (
    <div className="flex justify-center mt-60">
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button"  style={{
                    background: "#00000",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    padding: "8px 16px",
                    cursor: "pointer",
                  }}>
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button type="button" style={{ color: "red" }}>
                    Unsupported Chain
                  </button>
                );
              }
              return (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {chain.hasIcon && (
                    <div
                      style={{
                        background: chain.iconBackground,
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        overflow: 'hidden',
                      }}
                    >
                      {chain.iconUrl && (
                        <Image
                          alt={chain.name ?? "Chain icon"}
                          src={chain.iconUrl}
                         width={50}
                         height={50}
                        />
                      )}
                    </div>
                  )}
                  <button
                    onClick={openAccountModal}
                    type="button"
                    style={{
                      background: "#0000",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      padding: "8px 16px",
                      cursor: "pointer",
                      width: "180px"
                    }}
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
    </div>
  );
};

export default Button;
