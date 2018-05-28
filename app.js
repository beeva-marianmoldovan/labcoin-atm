const Web3 = require('web3')
const rq = require('request')

const ApiBuilder = require('claudia-api-builder')
const api = new ApiBuilder()

process.chdir('/tmp')
module.exports = api

api.get('/hello', function () {
  return 'hello world'
})

function recharge(address){
  return new Promise(function(resolve, reject) {
    //var newUserAddress = '0x423a9c5598356216340856d13265f6a47aa75a7b';
    var web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider(process.env.ENODE));

    rq(process.env.CONTRACT_URL, function (error, response, body) {
      var json = JSON.parse(body)
      var contract = web3.eth.contract(json.abi).at(json.networks['1337'].address)
      web3.eth.defaultAccount = process.env.ADDRESS
      web3.personal.unlockAccount(process.env.ADDRESS, process.env.PASSWORD);
      if(!contract.isRegistered(address)){
        web3.eth.sendTransaction({from:process.env.ADDRESS, to:address, value: web3.toWei('0.01', 'ether')}, function(err, result){
          if(err) reject(new api.ApiResponse(err, {}, 400))
          else resolve('Ok')
        })
      }
      else reject(new api.ApiResponse('User is already registered', {}, 400))
    })
  })
}

api.post('/recharge', function(request){
  const address = request.body.address
  if(address && address.length > 0){
    return recharge(address)
  }
  else return new api.ApiResponse('ERROR', {}, 400)
})
