// royaltyPayments.js
import { ethers } from "ethers";

// Paste your contract ABI here
const royaltyPaymentsAbi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "datasetId", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "creator", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "RoyaltyPaid",
    "type": "event"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "name": "datasetCreators",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_datasetId", "type": "uint256" }],
    "name": "payRoyalty",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_datasetId", "type": "uint256" },
      { "internalType": "address", "name": "_creator", "type": "address" }
    ],
    "name": "registerCreator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "royalties",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawRoyalties",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

// Replace with your deployed contract address after deployment
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

let provider;
let signer;
let contract;

export async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask is required to use this app.");
    return;
  }

  // Connect to MetaMask wallet
  provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = provider.getSigner();

  // Instantiate contract with signer (for read & write)
  contract = new ethers.Contract(contractAddress, royaltyPaymentsAbi, signer);

  console.log("Connected to RoyaltyPayments contract at:", contractAddress);
  return contract;
}

// Example: Register a creator for a dataset
export async function registerCreator(datasetId, creatorAddress) {
  if (!contract) await connectWallet();
  const tx = await contract.registerCreator(datasetId, creatorAddress);
  await tx.wait();
  console.log(`Creator ${creatorAddress} registered for dataset ${datasetId}`);
}

// Example: Pay royalty for a dataset (value in ethers)
export async function payRoyalty(datasetId, valueInEther) {
  if (!contract) await connectWallet();
  const tx = await contract.payRoyalty(datasetId, { value: ethers.utils.parseEther(valueInEther) });
  await tx.wait();
  console.log(`Paid royalty of ${valueInEther} ETH for dataset ${datasetId}`);
}

// Example: Withdraw accumulated royalties
export async function withdrawRoyalties() {
  if (!contract) await connectWallet();
  const tx = await contract.withdrawRoyalties();
  await tx.wait();
  console.log("Royalties withdrawn");
}

// Example: Get creator address of a dataset
export async function getCreator(datasetId) {
  if (!contract) await connectWallet();
  const creator = await contract.datasetCreators(datasetId);
  return creator;
}

// Example: Get royalties amount for an address
export async function getRoyalties(address) {
  if (!contract) await connectWallet();
  const amount = await contract.royalties(address);
  return ethers.utils.formatEther(amount);
}
