// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';

// this returns the provider, or null if it wasn't detected
const provider = await detectEthereumProvider();
const address = '0x471762A7017A5B1A3e931F1A97aa03Ef1E7F4A73'
const abi = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "owner",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "spender",
  "type": "address"
  },
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
  }
  ],
  "name": "Approval",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "account",
  "type": "address"
  },
  {
  "indexed": false,
  "internalType": "bool",
  "name": "isExcluded",
  "type": "bool"
  }
  ],
  "name": "ExcludeFromFees",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": false,
  "internalType": "address[]",
  "name": "accounts",
  "type": "address[]"
  },
  {
  "indexed": false,
  "internalType": "bool",
  "name": "isExcluded",
  "type": "bool"
  }
  ],
  "name": "ExcludeMultipleAccountsFromFees",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "uint256",
  "name": "newValue",
  "type": "uint256"
  },
  {
  "indexed": true,
  "internalType": "uint256",
  "name": "oldValue",
  "type": "uint256"
  }
  ],
  "name": "GasForProcessingUpdated",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "newLiquidityWallet",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "oldLiquidityWallet",
  "type": "address"
  }
  ],
  "name": "LiquidityWalletUpdated",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "previousOwner",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "newOwner",
  "type": "address"
  }
  ],
  "name": "OwnershipTransferred",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "iterations",
  "type": "uint256"
  },
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "claims",
  "type": "uint256"
  },
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "lastProcessedIndex",
  "type": "uint256"
  },
  {
  "indexed": true,
  "internalType": "bool",
  "name": "automatic",
  "type": "bool"
  },
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "gas",
  "type": "uint256"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "processor",
  "type": "address"
  }
  ],
  "name": "ProcessedDividendTracker",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "tokensSwapped",
  "type": "uint256"
  },
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "amount",
  "type": "uint256"
  }
  ],
  "name": "SendDividends",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "pair",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "bool",
  "name": "value",
  "type": "bool"
  }
  ],
  "name": "SetAutomatedMarketMakerPair",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "tokensSwapped",
  "type": "uint256"
  },
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "ethReceived",
  "type": "uint256"
  },
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "tokensIntoLiqudity",
  "type": "uint256"
  }
  ],
  "name": "SwapAndLiquify",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "from",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "to",
  "type": "address"
  },
  {
  "indexed": false,
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
  }
  ],
  "name": "Transfer",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "newAddress",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "oldAddress",
  "type": "address"
  }
  ],
  "name": "UpdateDividendTracker",
  "type": "event"
  },
  {
  "anonymous": false,
  "inputs": [
  {
  "indexed": true,
  "internalType": "address",
  "name": "newAddress",
  "type": "address"
  },
  {
  "indexed": true,
  "internalType": "address",
  "name": "oldAddress",
  "type": "address"
  }
  ],
  "name": "UpdateUniswapV2Router",
  "type": "event"
  },
  {
  "inputs": [],
  "name": "CAKE",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "CAKERewardsFee",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "name": "_isBlacklisted",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "_marketingWalletAddress",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "owner",
  "type": "address"
  },
  {
  "internalType": "address",
  "name": "spender",
  "type": "address"
  }
  ],
  "name": "allowance",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "spender",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "amount",
  "type": "uint256"
  }
  ],
  "name": "approve",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "name": "automatedMarketMakerPairs",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "account",
  "type": "address"
  }
  ],
  "name": "balanceOf",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "account",
  "type": "address"
  },
  {
  "internalType": "bool",
  "name": "value",
  "type": "bool"
  }
  ],
  "name": "blacklistAddress",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "claim",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "deadWallet",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "decimals",
  "outputs": [
  {
  "internalType": "uint8",
  "name": "",
  "type": "uint8"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "spender",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "subtractedValue",
  "type": "uint256"
  }
  ],
  "name": "decreaseAllowance",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "account",
  "type": "address"
  }
  ],
  "name": "dividendTokenBalanceOf",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "dividendTracker",
  "outputs": [
  {
  "internalType": "contract BABYCAKEDividendTracker",
  "name": "",
  "type": "address"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "account",
  "type": "address"
  }
  ],
  "name": "excludeFromDividends",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "account",
  "type": "address"
  },
  {
  "internalType": "bool",
  "name": "excluded",
  "type": "bool"
  }
  ],
  "name": "excludeFromFees",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address[]",
  "name": "accounts",
  "type": "address[]"
  },
  {
  "internalType": "bool",
  "name": "excluded",
  "type": "bool"
  }
  ],
  "name": "excludeMultipleAccountsFromFees",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "gasForProcessing",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "account",
  "type": "address"
  }
  ],
  "name": "getAccountDividendsInfo",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  },
  {
  "internalType": "int256",
  "name": "",
  "type": "int256"
  },
  {
  "internalType": "int256",
  "name": "",
  "type": "int256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "uint256",
  "name": "index",
  "type": "uint256"
  }
  ],
  "name": "getAccountDividendsInfoAtIndex",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  },
  {
  "internalType": "int256",
  "name": "",
  "type": "int256"
  },
  {
  "internalType": "int256",
  "name": "",
  "type": "int256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  },
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "getClaimWait",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "getLastProcessedIndex",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "getNumberOfDividendTokenHolders",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "getTotalDividendsDistributed",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "spender",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "addedValue",
  "type": "uint256"
  }
  ],
  "name": "increaseAllowance",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "account",
  "type": "address"
  }
  ],
  "name": "isExcludedFromFees",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "liquidityFee",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "marketingFee",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "name",
  "outputs": [
  {
  "internalType": "string",
  "name": "",
  "type": "string"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "owner",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "uint256",
  "name": "gas",
  "type": "uint256"
  }
  ],
  "name": "processDividendTracker",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "pair",
  "type": "address"
  },
  {
  "internalType": "bool",
  "name": "value",
  "type": "bool"
  }
  ],
  "name": "setAutomatedMarketMakerPair",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
  }
  ],
  "name": "setCAKERewardsFee",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
  }
  ],
  "name": "setLiquiditFee",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "uint256",
  "name": "value",
  "type": "uint256"
  }
  ],
  "name": "setMarketingFee",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address payable",
  "name": "wallet",
  "type": "address"
  }
  ],
  "name": "setMarketingWallet",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "swapTokensAtAmount",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "symbol",
  "outputs": [
  {
  "internalType": "string",
  "name": "",
  "type": "string"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "totalFees",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "totalSupply",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "recipient",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "amount",
  "type": "uint256"
  }
  ],
  "name": "transfer",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "sender",
  "type": "address"
  },
  {
  "internalType": "address",
  "name": "recipient",
  "type": "address"
  },
  {
  "internalType": "uint256",
  "name": "amount",
  "type": "uint256"
  }
  ],
  "name": "transferFrom",
  "outputs": [
  {
  "internalType": "bool",
  "name": "",
  "type": "bool"
  }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "newOwner",
  "type": "address"
  }
  ],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "uniswapV2Pair",
  "outputs": [
  {
  "internalType": "address",
  "name": "",
  "type": "address"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [],
  "name": "uniswapV2Router",
  "outputs": [
  {
  "internalType": "contract IUniswapV2Router02",
  "name": "",
  "type": "address"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "uint256",
  "name": "claimWait",
  "type": "uint256"
  }
  ],
  "name": "updateClaimWait",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "newAddress",
  "type": "address"
  }
  ],
  "name": "updateDividendTracker",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "uint256",
  "name": "newValue",
  "type": "uint256"
  }
  ],
  "name": "updateGasForProcessing",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "newAddress",
  "type": "address"
  }
  ],
  "name": "updateUniswapV2Router",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
  },
  {
  "inputs": [
  {
  "internalType": "address",
  "name": "account",
  "type": "address"
  }
  ],
  "name": "withdrawableDividendOf",
  "outputs": [
  {
  "internalType": "uint256",
  "name": "",
  "type": "uint256"
  }
  ],
  "stateMutability": "view",
  "type": "function"
  },
  {
  "stateMutability": "payable",
  "type": "receive"
}]
const babyboo = new ethers.Contract(abi, address, provider);

if (provider) {
    startApp(provider); // Initialize your app
  } else {
    console.log('Please install MetaMask!');
  }
  
  function startApp(provider) {
    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }
    // Access the decentralized web!
  }
  
  /**********************************************************/
  /* Handle chain (network) and chainChanged (per EIP-1193) */
  /**********************************************************/
  
  const chainId = await ethereum.request({ method: 'eth_chainId' });
  handleChainChanged(chainId);
  
  ethereum.on('chainChanged', handleChainChanged);
  
  function handleChainChanged(_chainId) {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
  }
  
  /***********************************************************/
  /* Handle user accounts and accountsChanged (per EIP-1193) */
  /***********************************************************/
  
  let currentAccount = null;
  ethereum
    .request({ method: 'eth_accounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
      // Some unexpected error.
      // For backwards compatibility reasons, if no accounts are available,
      // eth_accounts will return an empty array.
      console.error(err);
    });
  
  // Note that this event is emitted on page load.
  // If the array of accounts is non-empty, you're already
  // connected.
  ethereum.on('accountsChanged', handleAccountsChanged);
  
  // For now, 'eth_accounts' will continue to always return an array
  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== currentAccount) {
      currentAccount = accounts[0];
      // Do any other work!
    }
  }
  
  /*********************************************/
  /* Access the user's accounts (per EIP-1102) */
  /*********************************************/
  
  // You should only attempt to request the user's accounts in response to user
  // interaction, such as a button click.
  // Otherwise, you popup-spam the user like it's 1999.
  // If you fail to retrieve the user's account(s), you should encourage the user
  // to initiate the attempt.
  document.getElementById('connectButton', connect);
  
  // While you are awaiting the call to eth_requestAccounts, you should disable
  // any buttons the user can click to initiate the request.
  // MetaMask will reject any additional requests while the first is still
  // pending.
  function connect() {
    ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(handleAccountsChanged)
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
  }

  function listenForClicks (miniToken) {
    var button = document.querySelector('button.transferFunds')
    button.addEventListener('click', function() {
      babyboo.claim()
      .then(function (txHash) {
        console.log('Claim sent!')
        console.dir(txHash)
        waitForTxToBeMined(txHash)
      })
      .catch(console.error)
    })
  }


  function initContract (contract) {
    const MiniToken = contract(abi)
    const miniToken = MiniToken.at(address)
  listenForClicks(miniToken)
  }

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#header a').addClass('nav-link-dark');
        $('#headerImg').attr("src", "images/logo-bfece249803f3d440ef27a70c60f54f1.png");
        $('.mobile-nav-toggle>span').addClass('mobile-nav-toggle--span');
        $('.mobile-nav-toggle').addClass('mobile-nav-toggle--scrolled');

    } else {
        $('#header').removeClass('header-scrolled');
        $('#header a').removeClass('nav-link-dark');
        $('#headerImg').attr("src", "images/logo-white-512a641e90600644922a2327e20c5067.png");
        $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
        $('.mobile-nav-toggle').removeClass('mobile-nav-toggle--scrolled');
    }
});


// if ($(window).scrollTop() > 100) {
//     $('#header').addClass('header-scrolled');
//     $('#header a').addClass('nav-link-dark');
//     $('#headerImg').attr("src", "images/logo-bfece249803f3d440ef27a70c60f54f1.png");
// }

if ($('.main-nav').length && $('.main-nav').attr('display') != 'none') {
    var $mobile_nav = $('.main-nav').clone().prop({
        class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('nav').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><span></span><span></span><span></span></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-overly').toggle();
        $('.mobile-nav-toggle>span').addClass('mobile-nav-toggle--span');
    });

    $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-overly').hide();
            }
        }
    });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
    $(".mobile-nav, .mobile-nav-toggle").hide();
    $('.mobile-nav-overly').hide();
}

$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1
})

$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1
})



$(document).ready(function () {

    var myDate = new Date();
    myDate.setHours(myDate.getHours() + 1);
    $("#countdown").countdown(myDate, function (event) {
        $(this).html(
            event.strftime(
                '<div class="col-3"> <div class="time text-slate-dark">%H</div><span class="text text-slate">Hours</span> </div> <div class="col-3"> <div class="time text-slate-dark">%M</div><span class="text text-slate">Minutes</span> </div> <div class="col-3"> <div class="time text-slate-dark">%S</div><span class="text text-slate">Seconds</span> </div>'
            )
        );
    });

});
// Set the date we're counting down to
// var countDownDate = new Date();
// countDownDate.setDate(countDownDate.getDate() + 10);

// // Update the count down every 1 second
// var x = setInterval(function () {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     $(".sale-timer__days").prepend(days);
//     $(".sale-timer__hours").prepend(hours);
//     $(".sale-timer__minutes").prepend(minutes);
//     $(".sale-timer__seconds").prepend(seconds);

//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("countdownSale").innerHTML = "EXPIRED";
//     }
// }, 1000);