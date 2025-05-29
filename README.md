# 🚀 EthosChain – Decentralized Ethical AI Training & Auditing Platform

EthosChain ensures AI models are trained on ethically sourced, bias-checked, and consent-driven datasets by leveraging blockchain transparency and decentralized auditing.

---

## 📦 Tech Stack

- **Smart Contracts:** Solidity + Hardhat (Ethereum)
- **Frontend:** React.js + TailwindCSS + Ethers.js
- **Storage:** IPFS (for dataset metadata)
- **DAO & Token:** Aragon SDK + ERC-20 ($ETHOS)
- **Blockchain Interaction:** Web3.js / Ethers.js

---

## 🔧 Prerequisites

- [Node.js & npm](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- Metamask wallet (connected to Goerli or other testnet)
- Git

---

## 🛠️ Setup Guide

### 1. Clone Repository

```bash
git clone https://github.com/tchandok30/ethoschain.git
cd ethoschain
2. Install All Dependencies
bash
Copy
Edit
npm install
3. Compile & Deploy Smart Contracts
bash
Copy
Edit
cd smart-contracts
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network goerli
💡 Save the deployed contract address for frontend use.

4. Configure Frontend
Update frontend/src/config.js:

js
Copy
Edit
export const CONTRACT_ADDRESS = "0xYourDeployedAddress";
export const ABI = [ /* ABI from smart-contracts/artifacts */ ];
5. Run Frontend Locally
bash
Copy
Edit
cd frontend
npm install
npm start
App runs at: http://localhost:3000

6. Optional: IPFS for Metadata
Use Pinata or Infura IPFS gateway

Upload metadata and reference hashes in smart contracts

7. Run Smart Contract Tests
bash
Copy
Edit
cd smart-contracts
npx hardhat test
🧠 How It Works
Upload dataset → Metadata stored on IPFS → Hash stored on Ethereum

DAO members audit for bias, consent, and legality → Vote using $ETHOS

Developers can browse/purchase ethically verified datasets/models

Royalties are automatically sent to original data creators

📄 License
MIT © 2025 EthosChain Team

