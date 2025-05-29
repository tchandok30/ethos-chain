import React, { useState, useEffect } from "react";
import { getConsentContract } from "./connectConsentProof";
import { getDatasetRegistryContract } from "./connectDatasetRegistry";
import { getSimpleDAOContract } from "./SimpleDAO";

import {
  connectContract as connectTokenContract,
  getTokenName,
  getTokenSymbol,
  getTotalSupply,
  getBalanceOf,
  transferTokens,
} from "./ethosToken";

function App() {
  // --- Consent Manager states ---
  const [datasetId, setDatasetId] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [hasConsent, setHasConsent] = useState(null);

  // --- Dataset Registry states ---
  const [datasetCount, setDatasetCount] = useState(0);
  const [datasetInfo, setDatasetInfo] = useState(null);
  const [newDatasetHash, setNewDatasetHash] = useState("");
  const [queryDatasetId, setQueryDatasetId] = useState("");

  // --- SimpleDAO states ---
  const [daoContract, setDaoContract] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [newProposalDesc, setNewProposalDesc] = useState("");
  const [currentAccount, setCurrentAccount] = useState(null);

  // --- EthosToken states ---
  const [tokenContract, setTokenContract] = useState(null);
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenTotalSupply, setTokenTotalSupply] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [transferAmount, setTransferAmount] = useState("");

  // ----------------
  // Load dataset count on mount
  useEffect(() => {
    const fetchDatasetCount = async () => {
      try {
        const contract = await getDatasetRegistryContract();
        const count = await contract.datasetCount();
        setDatasetCount(count.toNumber());
      } catch (err) {
        console.error("Error fetching dataset count:", err);
      }
    };
    fetchDatasetCount();
  }, []);

  // Load proposals and connect DAO on mount
  useEffect(() => {
    const initDao = async () => {
      try {
        const contract = await getSimpleDAOContract();
        setDaoContract(contract);
        const signer = contract.signer;
        const account = await signer.getAddress();
        setCurrentAccount(account);
        await loadProposals(contract);
      } catch (err) {
        console.warn("DAO contract not connected yet:", err.message);
      }
    };
    initDao();
  }, []);

  // Load proposals helper
  const loadProposals = async (contract) => {
    try {
      const countBN = await contract.proposalCount();
      const count = countBN.toNumber();
      const props = [];
      for (let i = 1; i <= count; i++) {
        const p = await contract.proposals(i);
        props.push({
          id: p.id.toNumber(),
          description: p.description,
          voteCount: p.voteCount.toNumber(),
          isCompleted: p.isCompleted,
        });
      }
      setProposals(props);
    } catch (err) {
      console.error("Failed to load proposals:", err);
    }
  };

  // DAO functions
  const createProposal = async () => {
    if (!newProposalDesc.trim()) {
      alert("Enter proposal description");
      return;
    }
    try {
      const tx = await daoContract.createProposal(newProposalDesc);
      await tx.wait();
      alert("Proposal created!");
      setNewProposalDesc("");
      await loadProposals(daoContract);
    } catch (err) {
      alert("Error creating proposal: " + err.message);
    }
  };

  const voteProposal = async (id) => {
    try {
      const tx = await daoContract.vote(id);
      await tx.wait();
      alert(`Voted on proposal ${id}`);
      await loadProposals(daoContract);
    } catch (err) {
      alert("Error voting: " + err.message);
    }
  };

  const completeProposal = async (id) => {
    try {
      const tx = await daoContract.completeProposal(id);
      await tx.wait();
      alert(`Proposal ${id} completed`);
      await loadProposals(daoContract);
    } catch (err) {
      alert("Error completing proposal: " + err.message);
    }
  };

  // Consent Manager functions
  const checkConsent = async () => {
    try {
      const contract = await getConsentContract();
      const result = await contract.checkConsent(datasetId, userAddress);
      setHasConsent(result);
    } catch (err) {
      alert("Error checking consent: " + err.message);
    }
  };

  const giveConsent = async (consentBool) => {
    try {
      const contract = await getConsentContract();
      await contract.giveConsent(datasetId, consentBool);
      alert("Consent updated on blockchain.");
    } catch (err) {
      alert("Error updating consent: " + err.message);
    }
  };

  // Dataset Registry functions
  const getDataset = async () => {
    if (!queryDatasetId) {
      alert("Please enter a dataset ID to query");
      return;
    }
    try {
      const contract = await getDatasetRegistryContract();
      const dataset = await contract.getDataset(queryDatasetId);
      setDatasetInfo({
        hash: dataset.hash,
        creator: dataset.creator,
        timestamp: new Date(dataset.timestamp.toNumber() * 1000).toLocaleString(),
      });
    } catch (err) {
      alert("Dataset not found or error occurred.");
      setDatasetInfo(null);
    }
  };

  const registerDataset = async () => {
    if (!newDatasetHash) {
      alert("Please enter a dataset hash");
      return;
    }
    try {
      const contract = await getDatasetRegistryContract();
      const tx = await contract.registerDataset(newDatasetHash);
      await tx.wait();
      alert("Dataset registered successfully!");
      const count = await contract.datasetCount();
      setDatasetCount(count.toNumber());
      setNewDatasetHash("");
    } catch (err) {
      alert("Error registering dataset: " + err.message);
    }
  };

  // --- EthosToken functions ---

  const connectToken = async () => {
    try {
      const contract = await connectTokenContract();
      setTokenContract(contract);

      // Load token details
      const [name, symbol, supply, account] = await Promise.all([
        getTokenName(),
        getTokenSymbol(),
        getTotalSupply(),
        getCurrentAccount(),
      ]);
      setTokenName(name);
      setTokenSymbol(symbol);
      setTokenTotalSupply(supply);

      if (account) {
        const balance = await getBalanceOf(account);
        setTokenBalance(balance);
      }
    } catch (err) {
      alert("Error connecting token contract: " + err.message);
    }
  };

  const getCurrentAccount = async () => {
    if (!window.ethereum) return null;
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    return accounts.length > 0 ? accounts[0] : null;
  };

  const refreshBalance = async () => {
    if (!tokenContract) {
      alert("Token contract not connected");
      return;
    }
    try {
      const account = await getCurrentAccount();
      if (!account) {
        alert("No account connected");
        return;
      }
      const balance = await getBalanceOf(account);
      setTokenBalance(balance);
    } catch (err) {
      alert("Failed to get balance: " + err.message);
    }
  };

  const handleTransfer = async () => {
    if (!tokenContract) {
      alert("Token contract not connected");
      return;
    }
    if (!transferTo || !transferAmount) {
      alert("Please enter recipient address and amount");
      return;
    }
    try {
      // Transfer amount should be in smallest unit (e.g. wei), you can convert here if you want decimals handling
      const tx = await transferTokens(transferTo, transferAmount);
      await tx.wait();
      alert("Transfer successful");
      setTransferTo("");
      setTransferAmount("");
      await refreshBalance();
    } catch (err) {
      alert("Transfer failed: " + err.message);
    }
  };

  // On component mount, connect EthosToken contract automatically
  useEffect(() => {
    connectToken();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      {/* Consent Manager Section */}
      <h1>Consent Manager</h1>
      <input
        placeholder="Dataset ID"
        value={datasetId}
        onChange={(e) => setDatasetId(e.target.value)}
      />
      <input
        placeholder="User Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <button onClick={checkConsent}>Check Consent</button>
      {hasConsent !== null && <p>Consent: {hasConsent.toString()}</p>}
      <button onClick={() => giveConsent(true)}>Give Consent ✅</button>
      <button onClick={() => giveConsent(false)}>Revoke Consent ❌</button>

      <hr style={{ margin: "40px 0" }} />

      {/* Dataset Registry Section */}
      <h1>Dataset Registry</h1>
      <p>Total datasets registered: {datasetCount}</p>
      <h2>Get Dataset Info</h2>
      <input
        placeholder="Dataset ID"
        value={queryDatasetId}
        onChange={(e) => setQueryDatasetId(e.target.value)}
      />
      <button onClick={getDataset}>Get Dataset</button>
      {datasetInfo && (
        <div style={{ marginTop: 10 }}>
          <p><b>Hash:</b> {datasetInfo.hash}</p>
          <p><b>Creator:</b> {datasetInfo.creator}</p>
          <p><b>Timestamp:</b> {datasetInfo.timestamp}</p>
        </div>
      )}
      <h2 style={{ marginTop: 30 }}>Register New Dataset</h2>
      <input
        placeholder="Dataset Hash"
        value={newDatasetHash}
        onChange={(e) => setNewDatasetHash(e.target.value)}
      />
      <button onClick={registerDataset}>Register Dataset</button>

      <hr style={{ margin: "40px 0" }} />

      {/* Simple DAO Section */}
      <h1>Simple DAO</h1>
      <p>Connected account: {currentAccount || "Not connected"}</p>
      <input
        placeholder="New proposal description"
        value={newProposalDesc}
        onChange={(e) => setNewProposalDesc(e.target.value)}
        style={{ width: "60%" }}
      />
      <button onClick={createProposal}>Create Proposal</button>

      <h2 style={{ marginTop: 20 }}>Proposals</h2>
      {proposals.length === 0 && <p>No proposals found.</p>}
      {proposals.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", marginBottom: 15, padding: 10 }}>
          <p><b>ID:</b> {p.id}</p>
          <p><b>Description:</b> {p.description}</p>
          <p><b>Votes:</b> {p.voteCount}</p>
          <p><b>Completed:</b> {p.isCompleted ? "Yes" : "No"}</p>
          <button
            onClick={() => voteProposal(p.id)}
            disabled={p.isCompleted}
            style={{ marginRight: 10 }}
          >
            Vote
          </button>
          <button
            onClick={() => completeProposal(p.id)}
            disabled={p.isCompleted}
          >
            Complete
          </button>
        </div>
      ))}

      <hr style={{ margin: "40px 0" }} />

      {/* EthosToken Section */}
      <h1>EthosToken</h1>
      <p>
        <b>Name:</b> {tokenName} &nbsp; | &nbsp;
        <b>Symbol:</b> {tokenSymbol} &nbsp; | &nbsp;
        <b>Total Supply:</b> {tokenTotalSupply}
      </p>
      <p>
        <b>Your Balance:</b> {tokenBalance} &nbsp;
        <button onClick={refreshBalance}>Refresh Balance</button>
      </p>
      <h3>Transfer Tokens</h3>
      <input
        placeholder="Recipient Address"
        value={transferTo}
        onChange={(e) => setTransferTo(e.target.value)}
        style={{ width: "50%" }}
      />
      <input
        placeholder="Amount (smallest unit)"
        value={transferAmount}
        onChange={(e) => setTransferAmount(e.target.value)}
        style={{ width: "30%", marginLeft: 10 }}
      />
      <button onClick={handleTransfer} style={{ marginLeft: 10 }}>
        Transfer
      </button>
    </div>
  );
}

export default App;
