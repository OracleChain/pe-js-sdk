var Promise = require('promise');

var _sendPeRequest = function(serialNumber, params, methodName) {
    if (navigator.userAgent == 'PocketEosAndroid') {
        window.DappJsBridge.pushMessage(serialNumber,params,methodName)
    }
    // ios
    if (navigator.userAgent == 'PocketEosIos') {
        window.webkit.messageHandlers.pushMessage.postMessage({ 'params': params, 'serialNumber': serialNumber,'methodName':methodName } );
    }
}

var serialNumberFn = function(){
    return 'serialNumber' + (new Date().getTime() + parseInt(Math.random() * 100000000000));
}

var pe = {
    getAppInfo:function(){
        let serialNumber = serialNumberFn();
        _sendPeRequest(serialNumber,'','getAppInfo');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    },
    walletLanguage:function(){
        let serialNumber = serialNumberFn();
        _sendPeRequest(serialNumber,'','walletLanguage');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    },
    getEosAccount:function(){
        let serialNumber = serialNumberFn();
        _sendPeRequest(serialNumber,'','getEosAccount');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    },
    getWalletWithAccount:function(){
        let serialNumber = serialNumberFn();
        _sendPeRequest(serialNumber,'','getWalletWithAccount');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    },
    getEosBalance:function(params){
        let serialNumber = serialNumberFn();
        let Jparams = JSON.stringify(params);
        _sendPeRequest(serialNumber,Jparams,'getEosBalance');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    },
    getEosAccountInfo:function(params){
        let serialNumber = serialNumberFn();
        let Jparams = JSON.stringify(params);
        _sendPeRequest(serialNumber,Jparams,'getEosAccountInfo');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    },
    getTransactionById:function(params){
        let serialNumber = serialNumberFn();
        let Jparams = JSON.stringify(params);
        _sendPeRequest(serialNumber,Jparams,'getTransactionById');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    },
    pushActions:function(params){
        let serialNumber = params.serialNumber,
            Jparams = JSON.stringify(params);
        _sendPeRequest(serialNumber,Jparams,'pushActions');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    },
    pushTransfer:function(params){
        let serialNumber = params.serialNumber,
        Jparams = JSON.stringify(params);
        _sendPeRequest(serialNumber,Jparams,'pushTransfer');
        return new Promise(
            (resolve,reject)=>{
                window.callbackResult = function(returnSerialNumber,result){
                    if(returnSerialNumber == serialNumber){
                        resolve(JSON.parse(result));
                    }
                }
            }
        )
    }

}

module.exports = pe;
