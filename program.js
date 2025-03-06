function createBankAccount(startingAmount){
    balance=startingAmount;
    return {
      deposit: function(amt){
      balance+=amt
      console.log(`Deposited Amount: ${amt}  Balance:${balance}`)
    },
  
    withdraw: function(amt){
      if(amt<=balance){
        balance-=amt
        console.log(`Withdraw Amount: ${amt}   Balance: ${balance}`) 
      }
      else
        console.log("Insufficient Fund")
    },
    getBalance: function(){
      console.log(`Balance:${balance}`)
    }
    }
  }
  
  let user=createBankAccount(1000);
  user.deposit(1000);
  user.withdraw(200);
  user.getBalance();