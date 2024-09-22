import { Abi, AbiFunction } from "abitype";
import { ReadOnlyFunctionForm } from "~~/app/debug/_components/contract";
import { Contract, ContractName, GenericContract, InheritedFunctions } from "~~/utils/scaffold-eth/contract";

export const ContractReadMethods = ({
  deployedContractData,
  strictFn,
}: {
  deployedContractData: Contract<ContractName>;
  strictFn?: string; // strictFn is optional, it will be the function name if passed
}) => {
  if (!deployedContractData) {
    return null;
  }

  const functionsToDisplay = (
    ((deployedContractData.abi || []) as Abi).filter(part => part.type === "function") as AbiFunction[]
  )
    .filter(fn => {
      const isQueryableWithParams =
        (fn.stateMutability === "view" || fn.stateMutability === "pure") && fn.inputs.length > 0;
      return isQueryableWithParams;
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

  if (!functionsToDisplay.length) {
    return <>No read methods</>;
  }

  return (
    <>
      {functionsToDisplay.map(({ fn, inheritedFrom }) => (
        <ReadOnlyFunctionForm
          abi={deployedContractData.abi as Abi}
          contractAddress={deployedContractData.address}
          abiFunction={fn}
          key={fn.name}
          inheritedFrom={inheritedFrom}
        />
      ))}
    </>
  );
};
