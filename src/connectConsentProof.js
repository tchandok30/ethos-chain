import { ethers } from "ethers";
import ConsentProofABI from "./contracts/consentproof.json"; // adjust path if needed

const consentProofAddress = "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44"; // Replace with actual deployed address

export async function getConsentContract() {
  if (!window.ethereum) {
    alert("MetaMask not found!");
    return;
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(consentProofAddress, ConsentProofABI.abi, signer);
}
