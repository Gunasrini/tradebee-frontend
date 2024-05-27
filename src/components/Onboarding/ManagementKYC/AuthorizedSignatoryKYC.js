export default function AuthorizedSignatoryKYC() {
    return (
        <>
            <div className="documents-section">
                <div className="d-flex">
                    <h3>Authorized Signatory KYC</h3>
                    <h5 className="ms-auto"><i className="fas fa-plus text-primary"></i> Add New KYC</h5>
                </div>
                <ul className="nav nav-tabs">
                    <li className="nav-item d-flex align-items-center">
                        <a className="nav-link active" data-bs-toggle="tab" href="#Pan">PAN Verification</a>
                        <i className="far fa-clock"></i>
                    </li>
                    <li className="nav-item d-flex align-items-center">
                        <a className="nav-link" data-bs-toggle="tab" href="#Aadhar">Aadhar Verfication</a>
                        <i className="far fa-clock"></i>
                    </li>
                </ul>
                <form>
                    <div className="col-md-12 tab-content">
                        <div id="Pan" className="tab-pane active">
                            <div className="d-flex dashboard-form-row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <select className="form-select form-control">
                                            <option>KYC Type</option>
                                            <option>PAN</option>
                                            <option>Aadhar Card</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control"
                                            placeholder="Identifier Number" />
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 tab-content">
                        <div id="Aadhar" className="tab-pane">
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
                                        <p>ID Proof</p>
                                    </div>
                                    <div className="col-md-3 icons-wrap">
                                        <span className="icons"><i className="fas fa-edit"></i></span>
                                        <span className="icons"><i className="fas fa-trash"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="documents-section">
                <h3>Documents Upload</h3>
                <p>Upload Board Resolution for Appointment of Authorised Signatory</p>
                <form>
                    <div className="col-md-12 tab-content">
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" />
                            </div>
                        </div>
                        <div className="col-md-12 form-add-button">
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}