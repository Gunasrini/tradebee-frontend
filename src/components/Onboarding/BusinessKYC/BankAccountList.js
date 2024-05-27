function BankAccountList() {
    return (
        <>
            <div className="d-flex">
                <h3>Bank Account</h3>
                <h5 className="ms-auto"><i className="fas fa-plus text-primary"></i> Add New Account</h5>
            </div>
            <ul className="bank-list">
                <li>
                    <span className="icon"><i className="fas fa-university"></i></span>
                    <div className="bank-info">
                        <h4>HDFC Bank (Disbursement Account)</h4>
                        <p>Account: xxxxxx0000123 IFSC Code: xxxxxxx000</p>
                    </div>
                    <div className="edit-del-icon">
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash"></i>
                    </div>
                    <span className="verified-text"><i className="far fa-clock"></i> Verified</span>
                </li>
                <li className="mt-5">
                    <span className="icon"><i className="fas fa-university"></i></span>
                    <div className="bank-info">
                        <h4>HDFC Bank (Repayment Account)</h4>
                        <p>Account: xxxxxx0000123 IFSC Code: xxxxxxx000</p>
                    </div>
                    <div className="edit-del-icon">
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash"></i>
                    </div>
                    <span className="verified-text"><i className="far fa-clock"></i> Verified</span>
                </li>
            </ul>
        </>
    )
}


export default BankAccountList