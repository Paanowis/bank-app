import React, { Component } from 'react';

class AddAccount extends Component {
    state = {
        accountname: " ",
        accountnumber: " ",
        bankname: " ",
        bankbranch: " "
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addAccount(this.state);
        this.setState({
            accountname: " ",
            accountnumber: " ",
            bankname: " ",
            bankbranch: " "
        })
    }

    render (){
        return (
            <div className="add-account">
                <h2>Add Account</h2>
                <form onSubmit={this.handleSubmit}>
                    <tr>
                    <td><label htmlFor="accountname">Account Name:</label></td>
                    <td><input 
                    type="text" 
                    id="accountname" 
                    required 
                    onChange={this.handleChange} 
                    value={this.state.accountname} /></td>
                    </tr>
                    <br />
                    <tr>
                    <td><label htmlFor="accountnumber">Account Number:</label></td>
                    <td><input 
                    type="number" 
                    maxLength= "10" 
                    pattern="[0-9]+" 
                    id="accountnumber" 
                    required 
                    onChange={this.handleChange} 
                    value={this.state.accountnumber} /></td>
                    </tr>
                    <br />
                    <tr> 
                    <td><label htmlFor="bankname">Bank Name:</label></td>
                    <td><input 
                    type="text" 
                    id="bankname" 
                    required 
                    onChange={this.handleChange} 
                    value={this.state.bankname} /></td>
                    </tr>
                    <br />
                    <tr>
                    <td><label htmlFor="bankbranch">Bank Branch:</label></td>
                    <td><input 
                    type="text" 
                    id="bankbranch" 
                    required 
                    onChange={this.handleChange} 
                    value={this.state.bankbranch} /></td>
                    </tr>
                    <br />
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default AddAccount;