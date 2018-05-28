# labcoin-atm
Labcoin ATM

# Usage

Install claudia.js globally
```
npm install -g claudia
```

Download repo
```
git clone git@github.com:beeva-marianmoldovan/labcoin-atm.git
```

Install dependencies
```
npm install
```

If you are picky, you can alternatively use yarm
```
yarn install
```

Install (Anwbis)[!https://github.com/beeva/anwbis] and assume the rol devops with the following line:
```
anwbis --env dev --role devops --project innovacion
```

Upload code to AWS
```
npm run update
```

You also need to check the envs of the Lambda. ADDRESS is the address of the account used to send eth, and the PASSWORD it's the pass associated with this account. ENODE is the uri of the ethereum node to connect with. CONTRACT_URL and CONTRACT_ADDRESS are the uri of the truffle contract info export and the last env is the contract address

```
ADDRESS
PASSWORD
ENODE
CONTRACT_URL
CONTRACT_ADDRESS
```
