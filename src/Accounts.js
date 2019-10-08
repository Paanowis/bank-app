import React from 'react';
import Account from './Account';

class Accounts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEditing: true
        };
        
    }

    render(){ 
        const accountList = this.props.accounts.map(account => {
            return (
                <Account key={account.id} account={account} editAccount={this.props.editAccount} deleteAccount={this.props.deleteAccount}/>
            )
        })
    
        return (
        <div className="account-list">
            <h2>My Accounts</h2>
            { accountList }
        </div>
        );
    }
}
  
  export default Accounts;