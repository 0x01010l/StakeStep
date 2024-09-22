import { Abi, AbiFunction } from "abitype";
import { WriteOnlyFunctionForm } from "~~/app/debug/_components/contract";
import { Contract, ContractName, GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";

export const ContractWriteMethods = ({
  onChange,
  deployedContractData,
  strictFn,
}: {
  onChange: () => void;
  deployedContractData: Contract<ContractName>;
  strictFn?: string; // strictFn is optional, it will be the function name if passed
}) => {
  if (!deployedContractData) {
    return null;
  }

  // Extract functions from the ABI that are writeable (non-view, non-pure)
  const functionsToDisplay = (
    (deployedContractData.abi as Abi).filter(part => part.type === "function") as AbiFunction[]
  )
    .filter(fn => {
      const isWriteableFunction = fn.stateMutability !== "view" && fn.stateMutability !== "pure";
      return isWriteableFunction;
    })
    .map(fn => {
      return {
        fn,
        inheritedFrom: ((deployedContractData as GenericContract)?.inheritedFunctions as InheritedFunctions)?.[fn.name],
      };
    })
    .sort((a, b) => (b.inheritedFrom ? b.inheritedFrom.localeCompare(a.inheritedFrom) : 1));

  // Filter for strictFn if provided
  const filteredFunctions = strictFn
    ? functionsToDisplay.filter(({ fn }) => fn.name === strictFn) // Only display the function that matches strictFn
    : functionsToDisplay;

  if (!filteredFunctions.length) {
    return <>No write methods</>;
  }

  return (
    <>
      {filteredFunctions.map(({ fn, inheritedFrom }, idx) => (
        <WriteOnlyFunctionForm
          abi={deployedContractData.abi as Abi}
          key={`${fn.name}-${idx}`}
          abiFunction={fn}
          onChange={onChange}
          contractAddress={deployedContractData.address}
          inheritedFrom={inheritedFrom}
          specific={strictFn ? true : false}
        />
      ))}
    </>
  );
};
