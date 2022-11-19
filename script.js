const DAI_ADDRESS = "dai.tokens.ethers.eth"

const DAI_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount)",
    "event Transfer(address indexed from, address indexed to, uint amount)"
]

var provider = null
var signer = null
var daiContract = null

async function isConnected() {
    if (!window.ethereum) {
        console.error("No Ethereum provider found in browser. Install Metamask.")
        return false
    }
    const accounts = await ethereum.request({method: 'eth_accounts'})
    return accounts && accounts.length > 0
}

async function connectWallet() {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
    signer = provider.getSigner()
    daiContract = new ethers.Contract(DAI_ADDRESS, DAI_ABI, provider).connect(signer)
}

async function getWalletAddress() {
    return await signer.getAddress()
}

async function getBlockNumber() {
    return await provider.getBlockNumber()
}

async function getDaiTotalSupply() {
    const totalSupply = await daiContract.totalSupply()
    return ethers.utils.formatEther(totalSupply)
}
