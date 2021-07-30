let accounts;
let contract;
let account;
let subscription;

let total;

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

//async function getBalance() {
//  await contract.methods.balanceOf({from: account}.call(function(err,res));
//  return balance;
//}

function claimBOO() {
    console.log("Trying to Claim...") 
    contract.methods.claim().send({from: account}, (err, res) => {
        console.log("Calling Claim...")
        if (err) {
            alert("Transaction Declined!");
            return;
        }
})

}


async function updateData() {
    account = accounts[0];

    if (ethereum.chainId != "0xfa") {
        alert("Switch to Fantom Opera Mainnet");
    }

    // contract.methods.tokensToClaim(account).call({from: account}, (err, result) => {
    //     if (err) {
    //         document.getElementById('tokensToClaim').innerHTML = "0 BabyBOO"; // user account not created! so invalid opcode!
    //         return;
    //     }
        
    //     total = result;
    //     contract.methods.balanceOf(account).call({from: account}, (err, result) => {
    //         if (((total - result) / 1e6 ) < 0 ){
    //             document.getElementById('tokensToClaim').innerHTML = "0 BabyBOO";
    //         } else {
    //             document.getElementById('tokensToClaim').innerHTML = (total - result) / 1e6 + " BabyBOO";
    //         }
    //     });
    // });

}

// function claimBOO() {
//     if (tokensToClaim.innerHTML != "0 BabyBOO") {
//         contract.methods.transfer(account, 0).send({ 
//             from: account, 
//             value: 0
//         }).on('receipt', function(receipt) {
//             console.log(receipt);
//             Notiflix.Notify.Success('Successfully claimed BOO!');
//         });
//         Notiflix.Notify.Success('Sending transaction...');
//     } else {
//         alert("Nothing To Claim, Please wait to earn more BOO");
//     }
// }
