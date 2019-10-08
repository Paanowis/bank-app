import React, { Component } from 'react';

class UpdateList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false
        };
       
    }

    render() {
       
        return (
            <div>
            <from>
                <label htmlFor="accountname">Account Name:</label>
                <input type="text" id="accountname" value={this.props.account.accountname} />
                <label htmlFor="accountnumber">Account Number:</label>
                <input type="number" id="accountnumber" value={this.props.account.accountnumber}/>
                <label htmlFor="bankname">Bank Name:</label>
                <input type="text" id="bankname" value={this.props.account.bankname} />
                <label htmlFor="bankbranch">Bank Branch:</label>
                <input type="text" id="bankbranch" value={this.props.account.bankbranch} />
                <button>Save</button>
            </from>
            </div>
        );
    }
}

export default UpdateList;