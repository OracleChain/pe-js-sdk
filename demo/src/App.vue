<template>
  <div id="app">
    <img src="./assets/images/logo.png" alt="">
    <button class="btn" @click="getAppInfo">getAppInfo</button>
    <button class="btn" @click="walletLanguage">walletLanguage</button>
    <button class="btn" @click="getEosAccount">getEosAccount</button>
    <button class="btn"  @click="getWalletWithAccount">getWalletWithAccount</button>
    <button class="btn"  @click="getEosBalance">getEosBalance</button>
    <button class="btn"  @click="getEosAccountInfo">getEosAccountInfo</button>
    <button class="btn"  @click="getTransactionById">getTransactionById</button>
    <button class="btn"  @click="pushActions">pushActions</button>
    <button class="btn"  @click="pushTransfer">pushTransfer</button>
    <router-view/>
  </div>
</template>

<script>
// import pe from './assets/js/index.js'
export default {
  name: 'App',
  methods:{
    getAppInfo(){
      pe.getAppInfo().then(
        (res)=>{
          alert(JSON.stringify(res));
        }
      )
    },
    walletLanguage(){
      pe.walletLanguage().then(
        (res)=>{
          alert(JSON.stringify(res));
        }
      )
    },
    getEosAccount(){
      pe.getEosAccount().then(
        (res)=>{
          alert(JSON.stringify(res));
        }
      )
    },
    getWalletWithAccount(){
      pe.getWalletWithAccount().then(
        (res)=>{
          alert(JSON.stringify(res));
        }
      )
    },
    getEosBalance(){
      pe.getEosBalance({
        account: 'oraclechain4',
        contract: 'eosio.token'
      }).then(
        (res)=>{
            alert(JSON.stringify(res));
        }
      );
    },
    getEosAccountInfo(){
     pe.getEosAccountInfo({
        account: 'oraclechain4'
      }).then(
        (res)=>{
            alert(JSON.stringify(res));
        }
      );
    },
    getTransactionById(){
      pe.getTransactionById({
        txid: '7a733e53bd9e1ea4313fccca08005e1a612d3802151d237284a978685fffacc7'
      }).then(
        (res)=>{
            alert(JSON.stringify(res));
        }
      );
    },
    pushActions(params){
      pe.pushActions({
    actions: [
        {
            account: 'octtothemoon',
            name: 'transfer',
            authorization: [{
                actor: 'oraclechain4',
                permission: 'active'
            }],
            data: {
                from: 'oraclechain4',
                to: 'hellojinpeng',
                quantity: '0.0001 OCT',
                memo: 'something to say'
            }
         },
         {
            account: "octtothemoon",
            name: "transfer",
            authorization: [
                {
                actor: 'oraclechain4',
                permission: "active"
                }
            ],
            data: {
                from: 'oraclechain4',
                to: 'webstormshi1',
                quantity: '0.0001 OCT',
                memo: 'something to say'
            }
        }
    ],
    serialNumber: '1111111111111'
}).then(
        (res)=>{
            alert(JSON.stringify(res));
        }
      );
    },
    pushTransfer(params){
      pe.pushTransfer({
        from: 'oraclechain4',
        to: 'hellojinpeng',
        quantity: '0.0001 OCT',
        contract: 'octtothemoon',
        memo: 'test',
        serialNumber: '1111111111111'
    }).then(
        (res)=>{
            alert(JSON.stringify(res));
        }
      );
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
.btn{
  width: 200px;
  height: 30px;
  display: block;
  margin: 20px auto;
}
</style>
