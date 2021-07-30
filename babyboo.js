const { ethers } = require("ethers");


let window;
let accounts;
let contract;
let account;
let subscription;
let total;
let provider;

const babyBooAddress = "0x471762A7017A5B1A3e931F1A97aa03Ef1E7F4A73";
const abi = [
  "function claim() external"
];

const babyBoo = new ethers.Contract(babyBooAddress, abi, provider);

const initializeEthers = async () => {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  try {
    const signer = provider.getSigner(0);
    const addr = await signer.getAddress();
    const checkNet = (window.ethereum.networkVersion === "250");
  } catch (error) {
    return;
  }
}

await initializeEthers();

window.addEventListener('load', async function() {
    Notiflix.Notify.Init({
        width: '380px',
        position: 'right-bottom', 
        fontSize: '15px',
        timeout: 3000,
    });

    if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
        await ethereum.enable()
        contract = await new web3.eth.Contract(babyBOOAbi, babyBOOAddr)
        accounts = await web3.eth.getAccounts()
      } catch (error) {
          console.error(error)
      }
    } else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      contract = await new web3.eth.Contract(babyBOOAbi, babyBOOAddr)
      accounts = await web3.eth.getAccounts()
    } else {
        console.log('help');
    }

    setTimeout(() => {
        setTimeout(() => {
            updateData();
            subscription = web3.eth.subscribe('newBlockHeaders');
            subscription.on('data', updateData);
        }, 1000);
    }, 1000);
})

const babyBoo = new ethers.Contract(babyBooAddress, abi, provider);

async function claimBOO() {
  try {
    const tx = await babyBoo.claim();
    const receipt = await tx.wait();
    if (receipt.status === 0) {
      throw new Error("Transaction failed.");
    }
  } catch (error) {
    if (error.code === 4001) {
      return;
    }
  }
}

async function updateData() {
    account = accounts[0];

    if (ethereum.chainId != "0xfa") {
        alert("Switch to Fantom Opera Mainnet");
    }
  }