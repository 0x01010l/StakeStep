import { expect } from "chai";
import { ethers } from "hardhat";
import { YourContract } from "../typechain-types";

describe("YourContract", function() {
  // We define a fixture to reuse the same setup in every test.

  let yourContract: YourContract;
  before(async () => {
    const [owner] = await ethers.getSigners();
    const yourContractFactory = await ethers.getContractFactory("YourContract");
    yourContract = (await yourContractFactory.deploy(owner.address)) as YourContract;
    await yourContract.waitForDeployment();
  });

  describe("StakeStep", function() {
    let StakeStep;
    let stakeStep: any;
    let owner: any;
    let addr1: any;
    let addr2;

    beforeEach(async function() {
      [owner, addr1, addr2] = await ethers.getSigners();
      StakeStep = await ethers.getContractFactory("YourContract");
      stakeStep = await StakeStep.deploy(owner.address);
      await stakeStep.waitForDeployment();
    });

    it("Should allow creating a challenge, completing tasks, and claiming refund", async function() {
      const challengeId = ethers.id("testChallenge");
      const durationInDays = 7;
      const challengeName = "Test Challenge";
      const description = "A test challenge";
      const stakeAmount = ethers.parseEther("1");

      // Create challenge
      await stakeStep.createChallenge(challengeId, durationInDays, challengeName, description, { value: stakeAmount });

      // Join challenge
      await stakeStep.connect(addr1).joinChallenge(challengeId, { value: stakeAmount });

      // Simulate completing tasks for 3 days
      for (let day = 0; day < 3; day++) {
        await stakeStep.connect(owner).voteOnTask(challengeId, addr1.address, day, true);
        await stakeStep.connect(addr1).voteOnTask(challengeId, addr1.address, day, true);
      }

      // Fast forward time to after challenge end
      await ethers.provider.send("evm_increaseTime", [durationInDays * 24 * 60 * 60]);
      await ethers.provider.send("evm_mine");

      // Check balance before claiming refund
      const balanceBefore = await addr1.getBalance();

      // Claim refund
      await stakeStep.connect(addr1).claimRefund(challengeId);

      // Check balance after claiming refund
      const balanceAfter = await addr1.getBalance();

      // Expect refund to be about 3/7 of stake amount (minus gas costs)
      const expectedRefund = stakeAmount.mul(3).div(7);
      expect(balanceAfter.sub(balanceBefore)).closeTo(expectedRefund, ethers.parseEther("0.01"));
    });
  });
});
