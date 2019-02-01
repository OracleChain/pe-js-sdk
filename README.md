![Alt text](./logo.png)
[PocketEOS Website](http://pocketeos.com)

pocketEOS已经兼容scatter。
pocketEOS is already compatible with Scatter. 
**Installation**

    npm install pe-js-sdk
**Usage**
请在PocketEOS中使用该SDK。
Open your site in PocketEOS as a Dapp.

    import pe from 'pe-js-sdk'
**1-1** **pe.getAppInfo()**

获得当前钱包信息。
Get app Info

**调用**
**Call**

    pe.getAppInfo().then(
		function(result){
			console.log(result)
		}
	)

**返回**
**Returns**
Object:
- code:int
- data:Object
	- app: String
	- app_version: String
	- protocol_name: String
	- protocol_version: String
- message: String

**Example**

	{
	    "code": 0,
	    "data": {
	        "app": "PocketEosAndroid",
	        "protocol_version": "1.0.4",
	        "app_version": "2.0.2",
	        "protocol_name": "pe-js-sdk"
	    },
	    "message": "success"
	}

**1-2  pe.getEosAccount()**
获取用户当前EOS账号 
Get Current EOS Account

**调用** 
**Call**

    pe.getEosAccount().then(function(result){
		console.log(result)
	})
**返回**
**Returns**
Object
- code: int
- data: String
- message: String

**Example**

    {
	    "code": 0,
	    "data":"usersaccount" ,
	    "message": "success"
	}

**1-3 pe.getWalletWithAccount()**

**根据当前账号查询用户信息** 
**Get WalletUser with CurrentAccount**

**调用** 
**Call**

    pe.getWalletWithAccount().then(function(result){
		console.log(result)
	})

**返回**
**Returns**
Object
- code: int
- data: Object
	- account: String
	- uid: String
	- wallet_name: String
	- image: String
	- chainType: String 
	- active_public_key: String
- message: String

**Example**

    {
	    "code": 0,
	    "data": 
	        {
	            "account": "usersaccount",
	            "uid": "46eec3f33e3d86a40c914a591922f420",
	            "wallet_name": "haha",
	            "image": "",
		    "chainType": "eosType",
		    "active_public_key":""
	        } 
	    "message": "success"
	}

**1-4：pe.getEosBalance(params)**

**获取账号的余额** 
**Get Account Balance**

**参数 Parameters**
**params**
Object
- account: String
- contract: String

**调用** 
**Call**

    pe.getEosBalance({
	    account: "usersaccount",
	    contract: "eosio.token"
	}).then(function(result){
		console.log(result)
	})


**返回**
**Returns**
Object
- code: int
- data: Object
	- balance: String
	- contract: String
	- account: String
- message: String

**Example**

    {
	    "code": 0,
	    "data": 
	        {
	           "balance":"142.2648 EOS",
	           "contract":"eosio.token",
	           "account":"usersaccount"
	        } 
	    "message": "success"
	}


**1-5：pe.walletLanguage(params)**

**获取钱包语言** 
**walletLanguage**

**调用** 
**Call**

    pe.walletLanguage().then(function(result){
		console.log(result)
	})

**返回**
**Returns**
Object
- code: int
- data: String
- message: String

**Example**

    {
	    "code": 0,
	    "data": "Chinese",
	    "message": "success"
	}
	
**1-6 pe.getEosAccountInfo(params)**

**获取账号链上信息** 
**Get Account info**

**参数 Parameters**
**params**
Object
- account: String

**调用** 
**Call**

    pe.getEosAccountInfo({
	    account: "useraccount"
	}).then(function(result){
		console.log(result)
	})

**返回**
**Returns**
Object
- code: int
- data: Object
- message: String

**Example**

    {
	    "code": 0,
	    "data": 
	        {
	           "account_name": "usersaccount",
	    "cpu_limit": {
	        "available": 809061,
	        "max": 811571,
	        "used": 2510
	    },
	    "cpu_weight": 65207,
	    "created": "2018-06-10T13:09:52.000",
	    "head_block_num": 18229261,
	    "head_block_time": "2018-09-25T06:45:58.000",
	    "last_code_update": "1970-01-01T00:00:00.000",
	    "net_limit": {
	        "available": 241595,
	        "max": 241776,
	        "used": 181
	    },
	    "net_weight": 3577,
	    "permissions": "[
	        {
	            "parent": "owner",
	            "perm_name": "active",
	            "required_auth": {
	                "accounts": "[
	                ]",
	                "keys": "[
	                    {
	                        "key": "EOS67pa5ex64cECp2esLp6km78QfZDyEY8mAPieBHkD7JvfxiFzHH",
	                        "weight": 1
	                    }
	                ]",
	                "thresulthold": 1,
	                "waits": "[
	                ]"
	            }
	        },
	        {
	            "parent": "",
	            "perm_name": "owner",
	            "required_auth": {
	                "accounts": "[
	                ]",
	                "keys": "[
	                    {
	                        "key": "EOS7KX6pa4g4bchgvW1824CuuBYWD5idLkCgDia7ZuTpx7rGEacc9",
	                        "weight": 1
	                    }
	                ]",
	                "thresulthold": 1,
	                "waits": "[
	                ]"
	            }
	        }
	    ]",
	    "privileged": false,
	    "ram_quota": 17484,
	    "ram_usage": 6910,
	    "refund_request": null,
	    "self_delegated_bandwidth": {
	        "cpu_weight": "1.4874 EOS",
	        "from": "useraccount",
	        "net_weight": "0.0244 EOS",
	        "to": "useraccount"
	    },
	    "total_resultources": {
	        "cpu_weight": "6.5207 EOS",
	        "net_weight": "0.3577 EOS",
	        "owner": "useraccount",
	        "ram_bytes": 16084
	    },
	    "voter_info": {
	        "is_proxy": 0,
	        "last_vote_weight": "6754540314.01173496246337891",
	        "owner": "useraccount",
	        "producers": "[
	            "oraclegogogo"
	        ]",
	        "proxied_vote_weight": "0.00000000000000000",
	        "proxy": "",
	        "staked": 15118
	    }
	  } 
	    "message: "success"
	}


**1-7  pe.getTransactionById(params)**

**查询某个Transaction是否上链** 
**Query Transaction On BlockChain**

**参数 Parameters**
**params**
Object
- txid: String

**调用** 
**Call**

    pe.getTransactionById({
		txid: "7a733e53bd9e1ea4313fccca08005e1a612d3802151d237284a978685fffacc7"
	}).then(function(result){
		console.log(result)
	})

**返回**
**Returns**
Object
- code: int
- data: Object
- message: String

**Example**

    {
	    "code": 0,
	    "data": 
	        {
	         "block_time": "2018-09-23T05:21:46.000",
	        "block_num": "17873654",
	        "last_irreversible_block": "18231196",
	        "trx": {
	            "ref_block_prefix": 3456015016,
	            "max_cpu_usage_ms": 0,
	            "context_free_actions": [],
	            "expiration": "2018-09-23T05:22:15",
	            "max_net_usage_words": 0,
	            "delay_sec": 0,
	            "ref_block_num": 47860,
	            "actions": [
	                {
	                    "name": "transfer",
	                    "authorization": [
	                        {
	                            "actor": "usersaccount",
	                            "permission": "active"
	                        }
	                    ],
	                    "hex_data": "901544a626753155a0bc8cb1f71e8fc7bc05000000000000044f43540000000000",
	                    "data": {
	                        "memo": "",
	                        "from": "usersaccountt",
	                        "to": "yoursaccount",
	                        "quantity": "0.1468 OCT"
	                    },
	                    "account": "octtothemoon"
	                }
	            ],
	            "transaction_extensions": []
	        }
	        } 
	    "message": "success"
	}


**2-1 pe.pushActions(params)**

**签名多个action（包括同时进行多个transfer交易）** 
**Sign Multiple Actions(Including multiple transfers)**

**参数 Parameters**
**params**
Object
- actions: Array
- **EOS标准action内容 Standard eos actions**
- serialNumber: String
- **发起交易流水号，用于追踪该交易，并与链上txid进行对应 , 该字段可随意定制，但需保持唯一性**
- **Serial Number for thistransaction, which could be set as your rules and used to track transacations.**

**调用** 
**Call**

	pe.pushActions({
	    actions: [
	        {
	            account: "eosio.token",
	            name: "transfer",
	            authorization: [{
	                actor: "aaaabbbbcccc",
	                permission: "active"
	            }],
	            data: {
	                from: "aaaabbbbcccc",
	                to: "useraccount",
	                quantity: "1.3000 EOS",
	                memo: "something to say"
	            }
	         },
	         {
	            account: "eosio",
	            name: "delegatebw",
	            authorization: [
	                {
	                actor: "aaaabbbbcccc",
	                permission: "active"
	                }
	            ],
	            data: {
	                from: "aaaabbbbcccc",
	                receiver: "useraccount",
	stake_net_quantity: "0.0100 EOS",
	stake_cpu_quantity: "0.0100 EOS",
	                transfer: 0
	            }
	        }
	    ],
	serialNumber: "1111111111111"
	}).then(function(result){
	console.log(result)
	})



**返回**
**Returns**
Object
- code: int
- data: Object
	- serialNumber:String
	- txid:String
	- block_num:String
	- errorMsg:String
- message: String

**Example**

		//签名成功
		//Successful
	    {
		    "code": 0,
		    "data": 
			{
			   "serialNumber":"1111111111111",
		           "txid":"7a733e53bd9e1ea4313fccca08005e1a612d3802151d237284a978685fffacc7",
		           "block_num":"12233444235r42"
		        } 
		    "message": "success"
		}

		//签名失败
		//Failure
		{
		    "code": 1,
		    "data": 
			{
			   "serialNumber":"1111111111111",
		           "errorMsg":"密码错误"
		        } 
		    "message": "success"
		}

**2-2 pe.pushTransfer(params)**

**转账交易** 
**Transfer**

**参数 Parameters**
**params**
Object
- from: String
- to: String
- quantity: String
- contract: String
- memo: String
- serialNumber: String
- 发起交易流水号，用于追踪该交易，并与链上txid进行对应 , 该字段可随意定制，但需保持唯一性
- Serial Number for thistransaction, which could be set as your rules and used to track transacations.

**调用** 
**Call**

	pe.pushTransfer({
		from: "abcabcabcabc",
	    to: "useraccount",
	    quantity: "0.0100 EOS",
	    contract: "eosio.token",
	    memo: "test",
		serialNumber: "1111111111111"
	}).then(function(result){
		console.log(result)
	})



**返回**
**Returns**
Object
- code: int
- data: Object
	- serialNumber:String
	- txid:String
	- errorMsg:String
	- block_num:String
- message: String

**Example**

	//签名成功
	//Signature success
    {
	    "code": 0,
	    "data":  
		{
		   "serialNumber":"1111111111111",
           "txid":"7a733e53bd9e1ea4313fccca08005e1a612d3802151d237284a978685fffacc7",
           "block_num":"12233444235r42"
        } 
	    "message": "success"
	}
	//签名失败
	//Signature failure
	{
	    "code": 1,
	    "data": 
		{
		   "serialNumber":"1111111111111",
           "errorMsg":"password error"
        } 
	    "message": "fail"
	}


**备注：所有返回结果code为0表示正确，非0错误**
**Note: all returned results with code of 0 indicate correct and non-0 error**
