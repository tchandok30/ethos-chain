import { ethers } from "ethers";
import DatasetRegistryABI from "./contracts/DatasetRegistry.json";  // adjust path if needed

// Replace with your deployed contract address on the target network
const DATASET_REGISTRY_ADDRESS = "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d";

export async function connectDatasetRegistry() {
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return null;
  }

  try {
    // Request account access if needed
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Create contract instance
    const datasetRegistryContract = new ethers.Contract(
      DATASET_REGISTRY_ADDRESS,
      DatasetRegistryABI.abi,
      signer
    );

    return datasetRegistryContract;
  } catch (error) {
    console.error("Error connecting to DatasetRegistry contract:", error);
    return null;
  }
}
