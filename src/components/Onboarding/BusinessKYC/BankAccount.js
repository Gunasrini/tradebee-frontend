import React, { useState } from 'react';

function BankAccount() {
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [repeatAccountNumber, setRepeatAccountNumber] = useState("");
    const [accountType, setAccountType] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [accountHolderName, setAccountHolderName] = useState("");
    const [accountPurpose, setAccountPurpose] = useState({
        repayment: false,
        disbursement: false,
        both: false
    });

    const handleBankNameChange = (e) => {
        setBankName(e.target.value);
    };

    const handleAccountNumberChange = (e) => {
        setAccountNumber(e.target.value);
    };

    const handleRepeatAccountNumberChange = (e) => {
        setRepeatAccountNumber(e.target.value);
    };

    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
    };

    const handleIfscCodeChange = (e) => {
        setIfscCode(e.target.value);
    };

    const handleAccountHolderNameChange = (e) => {
        setAccountHolderName(e.target.value);
    };

    const handleAccountPurposeChange = (e) => {
        const { name, checked } = e.target;
        setAccountPurpose(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleAddAccount = () => {
        // Prepare data to send
        const company_id=localStorage.getItem('company_id');
        const data = {
            cid:company_id,
            bankname:bankName,
            accno:accountNumber,
            // repeatAccountNumber,
            acctype:accountType,
            ifsccode:ifscCode,
            accholdername:accountHolderName,
            accpurpose:1
        };

        // Send data to the backend API
        fetch('http://localhost:8081/api/insertAccountDetail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                alert("Data inserted successfully");
                console.log('Success:', data);
                // Reset the form fields after successful submission
                setBankName("");
                setAccountNumber("");
                setRepeatAccountNumber("");
                setAccountType("");
                setIfscCode("");
                setAccountHolderName("");
                setAccountPurpose({
                    repayment: false,
                    disbursement: false,
                    both: false
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <h3>Bank Account</h3>
            <form>
                <div className="dashboard-form-row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Bank Name" value={bankName} onChange={handleBankNameChange} />
                        </div>
                    </div>
                </div>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Account Number" value={accountNumber} onChange={handleAccountNumberChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Repeat Account Number" value={repeatAccountNumber} onChange={handleRepeatAccountNumberChange} />
                        </div>
                    </div>
                </div>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <select className="form-select form-control" value={accountType} onChange={handleAccountTypeChange}>
                                <option>Account Type</option>
                                <option>Savings</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="IFSC Code" value={ifscCode} onChange={handleIfscCodeChange} />
                        </div>
                    </div>
                </div>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Account Holder Name" value={accountHolderName} onChange={handleAccountHolderNameChange} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><strong>Account Purpose</strong></label>
                            <div className="radio-group">
                                <label><input type="checkbox" name="repayment" checked={accountPurpose.repayment} onChange={handleAccountPurposeChange} /> <span>Repayment</span></label>
                                <label><input type="checkbox" name="disbursement" checked={accountPurpose.disbursement} onChange={handleAccountPurposeChange} /> <span>Disbursement</span></label>
                                <label><input type="checkbox" name="both" checked={accountPurpose.both} onChange={handleAccountPurposeChange} /> <span>Both</span></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 form-add-button">
                <button type="button" className="btn btn-primary" onClick={handleAddAccount}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default BankAccount;
