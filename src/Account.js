import React from 'react';

class Account extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            accountname: " ",
            accountnumber: " ",
            bankname: " ",
            bankbranch: " "
        };
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleEdit = (e) => {
        e.preventDefault();
        console.log(this.state) ;
        this.props.editAccount(this.props.account.id, this.state);
        this.setState({
            isEditing: false
        });
    }

    render(){ 
        const { accountname, accountnumber, bankname, bankbranch } = this.props.account;
            return (
                <div className="account" key={this.props.account.id}>
                   
                    {this.state.isEditing ?
                        (
                            <div className="account-update">      
                                <form onSubmit={this.handleEdit  }>
                                    <div>
                                        <label htmlFor="accountname">Account Name:</label>
                                        <input 
                                        type="text" 
                                        id="accountname" 
                                        onChange={this.handleChange} 
                                        placeholder={accountname} />
                                    </div>
                                    <div>
                                        <label htmlFor="accountnumber">Account Number:</label>
                                        <input 
                                        type="number" 
                                        id="accountnumber" 
                                        onChange={this.handleChange} 
                                        placeholder={accountnumber}/>
                                    </div>
                                    <div>
                                        <label htmlFor="bankname">Bank Name:</label>
                                        <input 
                                        type="text" 
                                        id="bankname" 
                                        onChange={this.handleChange} 
                                        placeholder={bankname} />
                                    </div>
                                    <div>
                                        <label htmlFor="bankbranch">Bank Branch:</label>
                                        <input 
                                        type="text" 
                                        id="bankbranch" 
                                        onChange={this.handleChange} 
                                        placeholder={bankbranch} />
                                    </div>
                                    <div>
                                        <button>Save</button>
                                    </div>
                                </form>
                            </div>
                        )
                        :
                        (
                            <div className="accounts" key={this.props.account.id}>
                                <div>Account Name: { this.props.account.accountname }</div>
                                <div>Account Number: { this.props.account.accountnumber }</div>
                                <div>Bank Name: { this.props.account.bankname }</div>
                                <div>Bank Branch: { this.props.account.bankbranch }</div>
                                <div>
                                    <button onClick={() => {
                                        this.props.deleteAccount(this.props.account.id)}
                                    }>
                                        Delete
                                    </button>
                                    <button onClick={() => {
                                        this.setState({isEditing: !this.state.isEditing})
                                        }
                                    }>
                                        Update
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            )
        
    
    }
}
  
  export default Account;