// connect.js
import { ethers } from "ethers";

// Generic function to get contract instance
export async function getContract(abi, address) {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum); // Ethers v6
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    return contract;
  } else {
    alert("MetaMask is not installed!");
  }
}
