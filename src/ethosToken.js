import { ethers } from "ethers";

// Replace with your actual contract address
const contractAddress = "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c";

// Your token ABI (add full ABI here)
const contractABI = [
  {
    "inputs": [{"internalType": "uint256","name": "initialSupply","type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  // Minimal ERC20 ABI fragment (add the rest as needed)
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{"name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"name": "recipient", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"name": "spender", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {"name": "owner", "type": "address"},
      {"name": "spender", "type": "address"}
    ],
    "name": "allowance",
    "outputs": [{"name": "", "type": "uint256"}],
    "type": "function"
  },
];

let provider;
let signer;
let contract;

async function connectContract() {
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask!");
    return null;
  }

  provider = new ethers.providers.Web3Provider(window.ethereum);

  await provider.send("eth_requestAccounts", []);

  signer = provider.getSigner();

  contract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log("Contract connected:", contract);
  return contract;
}

async function getTokenName() {
  if (!contract) {
    await connectContract();
  }
  return await contract.name();
}

async function getTokenSymbol() {
  if (!contract) {
    await connectContract();
  }
  return await contract.symbol();
}

async function getTotalSupply() {
  if (!contract) {
    await connectContract();
  }
  const supply = await contract.totalSupply();
  // supply is a BigNumber, convert to string or number
  return supply.toString();
}

async function getBalanceOf(address) {
  if (!contract) {
    await connectContract();
  }
  const balance = await contract.balanceOf(address);
  return balance.toString();
}

async function transferTokens(to, amount) {
  if (!contract) {
    await connectContract();
  }
  // amount should be a string or number in token's smallest unit (e.g., wei)
  const tx = await contract.transfer(to, amount);
  await tx.wait();
  return tx;
}

async function approve(spender, amount) {
  if (!contract) {
    await connectContract();
  }
  const tx = await contract.approve(spender, amount);
  await tx.wait();
  return tx;
}

async function allowance(owner, spender) {
  if (!contract) {
    await connectContract();
  }
  const allowed = await contract.allowance(owner, spender);
  return allowed.toString();
}

export {
  connectContract,
  getTokenName,
  getTokenSymbol,
  getTotalSupply,
  getBalanceOf,
  transferTokens,
  approve,
  allowance,
  contract,
};
