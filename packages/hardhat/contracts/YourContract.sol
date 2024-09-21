//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract YourContract {
	// State Variables
	address public immutable owner;
	string public greeting = "StakeStep: build your habits";

struct PoolMetadata {
    string challengeName;
    string description;
}

 struct Pool {
        address creator;
        uint256 stakeAmount;
        uint256 totalStaked;
        uint256 creationTime;
        uint256 lockPeriod; // in days
        PoolMetadata metadata;
        mapping(address => bool) participants;
        address[] participantList;
    }

  mapping(uint256 => Pool) public pools;
  uint256 public poolCounter;

  event PoolCreated(uint256 indexed poolId, address creator, uint256 stakeAmount, uint256 lockPeriod);
  event UserAdded(uint256 indexed poolId, address user);
  event UserStaked(uint256 indexed poolId, address user, uint256 amount);
  event FundsRefunded(uint256 indexed poolId, address user, uint256 amount);	// Events: a way to emit log statements from smart contract that can be listened to by external parties

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	constructor(address _owner) {
		owner = _owner;
	}

	// Modifier: used to define a set of rules that must be met before or after a function is executed
	// Check the withdraw() function
	modifier isOwner() {
		// msg.sender: predefined variable that represents address of the account that called the current function
		require(msg.sender == owner, "Not the Owner");
		_;
	}

   function createPool(uint256 _lockPeriod, string memory _challengeName, string memory _description) external payable returns (uint256) {
        require(msg.value > 0, "Must stake some ETH to create a pool");
        require(_lockPeriod > 0, "Lock period must be greater than 0");
        
        uint256 poolId = poolCounter++;
        Pool storage newPool = pools[poolId];
        newPool.creator = msg.sender;
        newPool.stakeAmount = msg.value;
        newPool.totalStaked = msg.value;
        newPool.creationTime = block.timestamp;
        newPool.lockPeriod = _lockPeriod;
        newPool.metadata = PoolMetadata(_challengeName, _description);
        newPool.participants[msg.sender] = true;
        newPool.participantList.push(msg.sender);
        
        emit PoolCreated(poolId, msg.sender, msg.value, _lockPeriod);
        emit UserStaked(poolId, msg.sender, msg.value);
        return poolId;
    }

   function addToPool(uint256 _poolId, address _user) external {
        require(_poolId < poolCounter, "Pool does not exist");
        Pool storage pool = pools[_poolId];
        require(msg.sender == pool.creator, "Only pool creator can add users");
        require(!pool.participants[_user], "User already in pool");
        
        pool.participants[_user] = true;
        pool.participantList.push(_user);
        emit UserAdded(_poolId, _user);
    }

    function stakeToPool(uint256 _poolId) external payable {
        require(_poolId < poolCounter, "Pool does not exist");
        Pool storage pool = pools[_poolId];
        require(pool.participants[msg.sender], "You are not invited to this pool");
        require(msg.value == pool.stakeAmount, "Must stake exact amount");
        require(block.timestamp < pool.creationTime + pool.lockPeriod * 1 days, "Pool is locked");

        pool.totalStaked += msg.value;
        emit UserStaked(_poolId, msg.sender, msg.value);
    }

    function refund(uint256 _poolId) external {
        require(_poolId < poolCounter, "Pool does not exist");
        Pool storage pool = pools[_poolId];
        require(pool.participants[msg.sender], "You are not in this pool");
        require(block.timestamp >= pool.creationTime + pool.lockPeriod * 1 days, "Pool is still locked");

        uint256 refundAmount = pool.stakeAmount;
        pool.totalStaked -= refundAmount;
        pool.participants[msg.sender] = false;

        // Remove user from participantList
        for (uint i = 0; i < pool.participantList.length; i++) {
            if (pool.participantList[i] == msg.sender) {
                pool.participantList[i] = pool.participantList[pool.participantList.length - 1];
                pool.participantList.pop();
                break;
            }
        }

        payable(msg.sender).transfer(refundAmount);
        emit FundsRefunded(_poolId, msg.sender, refundAmount);
    }


    function getPoolInfo(uint256 _poolId) external view returns (
        address creator,
        uint256 stakeAmount,
        uint256 totalStaked,
        uint256 creationTime,
        uint256 lockPeriod,
        uint256 participantCount,
        string memory challengeName,
        string memory description
    ) {
        require(_poolId < poolCounter, "Pool does not exist");
        Pool storage pool = pools[_poolId];
        return (
            pool.creator,
            pool.stakeAmount,
            pool.totalStaked,
            pool.creationTime,
            pool.lockPeriod,
            pool.participantList.length,
            pool.metadata.challengeName,
            pool.metadata.description
        );
    }

    function getPoolParticipants(uint256 _poolId) external view returns (address[] memory) {
        require(_poolId < poolCounter, "Pool does not exist");
        return pools[_poolId].participantList;
    }

    function isUserInPool(uint256 _poolId, address _user) external view returns (bool) {
        require(_poolId < poolCounter, "Pool does not exist");
        return pools[_poolId].participants[_user];
    }    /**
	 * Function that allows the owner to withdraw all the Ether in the contract
	 * The function can only be called by the owner of the contract as defined by the isOwner modifier
	 */
	// function withdraw() public isOwner {
	// 	(bool success, ) = owner.call{ value: address(this).balance }("");
	// 	require(success, "Failed to send Ether");
	// }
	//
	/**
	 * Function that allows the contract to receive ETH
	 */
	receive() external payable {}
}
