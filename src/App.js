import React, { Component } from 'react';
import Accounts from './Accounts';
import AddAccount from './AddAccount';

class App extends Component { 
  state = {
    accounts : [
      { accountname: "Paa Qwesi Nowis", accountnumber: "1234567890", bankname: "International Bureau Bank", bankbranch: "Nungua", id: 1 },
      { accountname: "Paa Qwesi Nowis", accountnumber: "1234567891", bankname: "Universal Hold Bank", bankbranch: "Teshie", id: 2 },
      { accountname: "Paa Qwesi Nowis", accountnumber: "1234567892", bankname: "World Agricultural Bank", bankbranch: "Tema", id: 3 },
      { accountname: "Paa Qwesi Nowis", accountnumber: "1234567893", bankname: "Africa Development Bank", bankbranch: "Osu", id: 4 }
    ],
  }


  addAccount = (account) => {
    account.id = Math.random();
    let accounts = [...this.state.accounts, account];
    this.setState({
      accounts: accounts
    })
  }

  deleteAccount = (id) => {
     const accounts = this.state.accounts.filter(account => {
       return account.id !== id
     });
     this.setState({
       accounts: accounts
     })
  }

  edit = (id, editedAccount) => {
    console.log("edited", editedAccount);
    
    console.log('id:'+ id,  editedAccount.accountname)
    const editedAccounts = this.state.accounts.map(account => {
        if(account.id===id){
          console.log(account);
          
            return {...account, ...editedAccount}
        }
        return account;
    });
    this.setState({
        accounts: editedAccounts
    }) 
}

  render(){
    return (
      <div className="App">
        <h1>MANAGE ACCOUNTS</h1>
        <Accounts editAccount={this.edit} deleteAccount={this.deleteAccount} accounts={this.state.accounts} />
        <AddAccount addAccount={this.addAccount} />
      </div>
    );
  }
}


export default App;
