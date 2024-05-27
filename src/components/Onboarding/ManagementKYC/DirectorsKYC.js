export default function DirectorsKYC() {
    return (
        <>
            <h3>Directors KYC</h3>
            <div className="KYC-completion">
                <li>
                    <i className="fas fa-file-alt"></i>
                    <h3><i className="fas fa-plus text-primary"></i> Complete the KYC</h3>
                </li>
                <li>
                    <i className="fas fa-file-alt"></i>
                    <h3><i className="fas fa-plus text-primary"></i> Verify CIBIL Report</h3>
                </li>
            </div>
            <div className="d-flex dashboard-form-row verification-list">
                <div className="col-md-6 border col">
                    <span className="verified-text"><i className="far fa-clock"></i> Verified</span>
                    <div className="info">
                        <h3>Aadhar</h3>
                        <h5>xxxx xxxx xxxx xxxx</h5>
                        <p>ID Proof</p>
                    </div>
                    <div className="col-md-3 icons-wrap">
                        <span className="icons"><i className="fas fa-edit"></i></span>
                        <span className="icons"><i className="fas fa-trash"></i></span>
                    </div>
                </div>
                <div className="col-md-6 border col">
                    <span className="verified-text"><i className="far fa-clock"></i> Verified</span>
                    <div className="info">
                        <h3>PAN</h3>
                        <h5>xxxxxxxxx0256</h5>
                        <p>Age Proof</p>
                    </div>
                    <div className="col-md-3 icons-wrap">
                        <span className="icons"><i className="fas fa-edit"></i></span>
                        <span className="icons"><i className="fas fa-trash"></i></span>
                    </div>
                </div>
            </div>
            <div className="d-flex dashboard-form-row verification-list">
                <div className="col-md-6 border col">
                    <span className="verified-text"><i className="far fa-clock"></i> Verified</span>
                    <div className="info">
                        <h3>Company CIBIL</h3>
                        <h5>xxxxxxxxx0256</h5>
                        <a href="#" className="mt-4 d-inline-block">Detail Report</a>
                    </div>
                    <div className="col-md-3 icons-wrap">
                        <span className="icons"><i className="fas fa-edit"></i></span>
                        <span className="icons"><i className="fas fa-trash"></i></span>
                    </div>
                </div>
            </div>
        </>
    )
}