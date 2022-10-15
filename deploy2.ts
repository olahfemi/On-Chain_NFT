import { ethers } from "hardhat";

async function main() {


  const OlahFemi2 = await ethers.getContractFactory("OlahFemi2");
  const olahfemi2 = await OlahFemi2.deploy();

  await olahfemi2.deployed();

  console.log(`OlahFemi2 is deployed to ${olahfemi2.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// CONTRACTADDRESS on Goerli = address
