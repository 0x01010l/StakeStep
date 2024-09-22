"use client";

import { useEffect, useMemo, useReducer, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { BarsArrowUpIcon } from "@heroicons/react/20/solid";
import { ContractUI } from "~~/app/debug/_components/contract";
import { ContractWriteMethods } from "~~/app/debug/_components/contract/ContractWriteMethods";
import { useDeployedContractInfo, useNetworkColor } from "~~/hooks/scaffold-eth";
import { ContractName, GenericContract } from "~~/utils/scaffold-eth/contract";
import { useAllContracts } from "~~/utils/scaffold-eth/contractsData";

const selectedContractStorageKey = "scaffoldEth2.selectedContract";

const Challenge = () => {
  const contractsData = useAllContracts();
  const contractNames = useMemo(() => Object.keys(contractsData) as ContractName[], [contractsData]);

  const [selectedContract, setSelectedContract] = useLocalStorage<ContractName>(
    selectedContractStorageKey,
    contractNames[0],
    { initializeWithValue: false },
  );

  const [refreshDisplayVariables, triggerRefreshDisplayVariables] = useReducer(value => !value, false);
  const { data: deployedContractData, isLoading: deployedContractLoading } = useDeployedContractInfo("YourContract");

  useEffect(() => {
    if (!contractNames.includes(selectedContract)) {
      setSelectedContract(contractNames[0]);
    }
  }, [contractNames, selectedContract, setSelectedContract]);

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);
  const [isVoteModalOpen, setVoteModalOpen] = useState(false);

  const toggleCreateModal = () => setCreateModalOpen(!isCreateModalOpen);
  const toggleJoinModal = () => setJoinModalOpen(!isJoinModalOpen);
  const toggleVoteModal = () => setVoteModalOpen(!isVoteModalOpen);

  return (
    <div className="flex justify-center items-center bg-[#e9d8a6] text-[#333333] h-screen gap-2">
      {/* Create Challenge Button */}
      <button
        onClick={toggleCreateModal}
        className="bg-blue-600 hover:bg-blue-700 w-60 h-32  text-white font-bold text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        Create Challenge
      </button>

      {/* Join Challenge Button */}
      <button
        onClick={toggleJoinModal}
        className="bg-green-600 hover:bg-green-700 text-white w-60   h-32 font-bold text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        Join Challenge
      </button>

      {/* Vote Button */}
      <button
        onClick={toggleVoteModal}
        className="bg-red-600 hover:bg-red-700 text-white font-bold w-60 h-32 text-4xl py-8 px-12 rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
      >
        Vote
      </button>

      {/* Create Challenge Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Create Challenge</h2>
            <p className="mb-4">Here you can create a new challenge.</p>
            <ContractWriteMethods
              deployedContractData={deployedContractData}
              onChange={triggerRefreshDisplayVariables}
              strictFn="createChallenge"
            />
            <button onClick={toggleCreateModal} className="bg-red-600 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Join Challenge Modal */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Join Challenge</h2>
            <p className="mb-4">Here you can join an existing challenge.</p>
            <ContractWriteMethods
              deployedContractData={deployedContractData}
              onChange={triggerRefreshDisplayVariables}
              strictFn="joinChallenge"
            />

            <button onClick={toggleJoinModal} className="bg-red-600 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* Vote Modal */}
      {isVoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Vote your frens</h2>
            <p className="mb-4">If they did the deed give show them green flag. Else you know the drill.</p>
            <ContractWriteMethods
              deployedContractData={deployedContractData}
              onChange={triggerRefreshDisplayVariables}
              strictFn="voteOnTask"
            />

            <button onClick={toggleVoteModal} className="bg-red-600 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;
