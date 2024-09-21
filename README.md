# StakeStep👟

# StakeStep: Habit Formation with Accountability

## Introduction

StakeStep is a revolutionary habit-forming app that combines the power of social accountability with financial incentives. In today's fast-paced world, many of us struggle to build and maintain positive habits, despite our best intentions. StakeStep addresses this challenge by creating a unique ecosystem where users can set personal goals, invite friends or colleagues to join their accountability pool, and put their money where their mouth is.

By leveraging blockchain technology and smart contracts, StakeStep ensures transparency and fairness in the goal-setting and verification process. Users can create or join pools, set specific, time-bound tasks, and stake cryptocurrency as a commitment to their goals. The app's consensus mechanism allows pool participants to verify task completion, adding an extra layer of motivation and accountability.

Whether you're looking to exercise more, save money, learn a new skill, or break a bad habit, StakeStep provides the structure and incentives to help you succeed. With StakeStep, transform your intentions into actions and your actions into lasting habits.

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

5. **Quit Smoking**

   - Goal: No cigarettes for 60 days
   - Stake: $200 worth of cryptocurrency
   - Pool: Support group members
   - Verification: Daily check-ins and consensus voting by pool members

6. **Mindfulness Practice**

   - Goal: Meditate for 20 minutes daily for 30 days
   - Stake: 0.08 ETH
   - Pool: Meditation group members
   - Verification: Integration with meditation apps or daily logged sessions

7. **Writing Challenge**

   - Goal: Write 500 words daily for 30 days
   - Stake: 0.1 ETH
   - Pool: Writing group or accountability partners
   - Verification: Word count submissions or integration with writing apps

8. **Hydration Habit**
   - Goal: Drink 8 glasses of water daily for 21 days
   - Stake: 0.05 ETH
   - Pool: Health-conscious friends
   - Verification: Manual logging or smart water bottle integration

These use cases demonstrate the versatility of StakeStep across various personal development areas, showcasing how it can be adapted to different goals, timeframes, and verification methods. The app's flexibility allows users to create custom challenges tailored to their specific needs and interests, all while leveraging the power of social accountability and financial incentives.

## Evaluation of StakeStep Against Hackathon Tracks

### 1. Blockchain for Sustainable Development Goals (SDGs)

StakeStep aligns well with this track, particularly for the following SDGs:

- Goal 3: Good Health and Well-being (fitness, mindfulness, quitting smoking)
- Goal 4: Quality Education (language learning, productivity)
- Goal 12: Responsible Consumption (savings goals)

Strengths:

- Encourages positive habit formation, contributing to individual and community well-being
- Uses blockchain for transparency and accountability

Areas for improvement:

- Could more directly address global challenges like poverty or climate action

### 2. Onboarding the Future - Ethereum for Everyone

StakeStep has potential in this track:

Strengths:

- User-friendly concept that could introduce new users to Ethereum
- Gamification elements through challenges and rewards

Areas for improvement:

- Could incorporate more privacy-enhancing features
- Might need additional onboarding features for crypto newcomers

### 3. Ethereum and L2s

StakeStep is well-suited for this track:

Strengths:

- Uses smart contracts for managing stakes and consensus
- Could benefit from L2 solutions for faster, cheaper transactions

Areas for improvement:

- Could explore more complex DeFi integrations

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
