# StakeStep👟

# StakeStep: Habit Formation with Accountability

## Introduction

- 📽️ Watch Demo : [HERE](https://youtu.be/lRuzKyqinx0)
- 👾 Live App: [HERE](https://stakestep.vercel.app/)
- 📜 PPT : [HERE](https://www.canva.com/design/DAGRclnJV1k/AXQen8p6JTo9EL9aZvnuzA/view?utm_content=DAGRclnJV1k&utm_campaign=designshare&utm_medium=link&utm_source=editor)

StakeStep is a revolutionary habit-forming app that combines the power of social accountability with financial incentives. In today's fast-paced world, many of us struggle to build and maintain positive habits, despite our best intentions. StakeStep addresses this challenge by creating a unique ecosystem where users can set personal goals, invite friends or colleagues to join their accountability pool, and put their money where their mouth is.

By leveraging blockchain technology and smart contracts, StakeStep ensures transparency and fairness in the goal-setting and verification process. Users can create or join pools, set specific, time-bound tasks, and stake cryptocurrency as a commitment to their goals. The app's consensus mechanism allows pool participants to verify task completion, adding an extra layer of motivation and accountability.

Whether you're looking to exercise more, save money, learn a new skill, or break a bad habit, StakeStep provides the structure and incentives to help you succeed. With StakeStep, transform your intentions into actions and your actions into lasting habits.

## StakeStep : Know the Contract

StakeStep is a Solidity smart contract designed to facilitate habit-building challenges on the Ethereum blockchain. It allows users to create, join, and participate in challenges where they stake ETH as an incentive to complete daily tasks. The contract incorporates a voting system for task verification and a fair distribution mechanism for rewards.

## Technical Documentation

Smart Contract Deployed on Sepolia : [HERE](https://sepolia.etherscan.io/address/0x0a36a9fA25155C57b72744aB1d369bA772bc40e8)

### Core Functions

1. `createChallenge(bytes32 _challengeId, uint256 _durationInDays, string memory _challengeName, string memory _description) external payable`

   - Creates a new challenge with a unique ID, duration, name, and description.
   - Requires the creator to stake ETH.

2. `joinChallenge(bytes32 _challengeId) external payable`

   - Allows users to join an existing challenge by staking the required amount of ETH.

3. `voteOnTask(bytes32 _challengeId, address _participant, uint256 _day, bool _inFavor) external`

   - Enables participants to vote on the completion of tasks for other participants.
   - A task is marked as completed when it receives majority votes.

4. `claimRefund(bytes32 _challengeId) external`

   - Allows participants to claim a refund proportional to their completed tasks after the challenge ends.

5. `distributeRemainingFunds(bytes32 _challengeId) external`
   - Distributes any remaining funds to top performers after a waiting period.

### View Functions

6. `getAllChallenges() external view returns (bytes32[] memory)`

   - Returns an array of all challenge IDs.

7. `getChallengeCount() external view returns (uint256)`

   - Returns the total number of challenges created.

8. `getChallengeInfo(bytes32 _challengeId) external view`

   - Returns detailed information about a specific challenge.

9. `getParticipants(bytes32 _challengeId) external view returns (address[] memory)`

   - Returns an array of participant addresses for a given challenge.

10. `getTaskStatus(bytes32 _challengeId, address _participant, uint256 _day) external view`
    - Returns the status of a specific task, including completion and vote counts.

### Structs

- `Task`: Represents a daily task with completion status and voting information.
- `Challenge`: Contains all information related to a challenge, including participants, tasks, and stake amounts.

### Events

- `ChallengeCreated`: Emitted when a new challenge is created.
- `UserJoined`: Emitted when a user joins a challenge.
- `TaskCompleted`: Emitted when a task is marked as completed.
- `TaskVoted`: Emitted when a vote is cast for a task.
- `FundsRefunded`: Emitted when a participant claims a refund.
- `AdditionalFundsDistributed`: Emitted when remaining funds are distributed to top performers.

### Other Features

- It includes a `receive()` function to accept ETH payments.

This smart contract provides a robust framework for creating and managing habit-building challenges with financial incentives, peer verification, and fair reward distribution.

## Use Cases

1. **Fitness Challenge**

   - Goal: Complete 10,000 steps daily for 30 days
   - Stake: 0.1 ETH
   - Pool: 5 friends
   - Verification: Data from fitness trackers synced with the app

2. **Savings Drive**

   - Goal: Save $500 per month for 6 months
   - Stake: $100 worth of stablecoin
   - Pool: Family members
   - Verification: Bank statement screenshots or integration with personal finance apps

3. **Language Learning**

   - Goal: Complete 1 hour of language study daily for 90 days
   - Stake: 0.05 ETH
   - Pool: Language exchange partners
   - Verification: Integration with language learning apps or daily check-ins with pool members

4. **Productivity Boost**

   - Goal: Maintain a 5-hour deep work streak for 20 workdays
   - Stake: 0.2 ETH
   - Pool: Coworkers or professional network
   - Verification: Time tracking app integration or end-of-day reports

These use cases demonstrate the versatility of StakeStep across various personal development areas, showcasing how it can be adapted to different goals, timeframes, and verification methods. The app's flexibility allows users to create custom challenges tailored to their specific needs and interests, all while leveraging the power of social accountability and financial incentives.

## Quickstart

To get started with StakeStep, follow the steps below:

1. Install dependencies if it was skipped in CLI:

```
cd StakeStep
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

Run smart contract test with `yarn hardhat:test`
