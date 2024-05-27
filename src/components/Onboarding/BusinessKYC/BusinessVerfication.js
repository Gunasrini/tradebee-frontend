import cibilImg from './../../../assets/images/cibil-img.png'

function BusinessVerfication() {
    return (
        <div className="documents-section">
            <h3>Business Verfication</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link active" data-bs-toggle="tab" href="#PAN">PAN</a>
                    <i className="far fa-clock"></i>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" data-bs-toggle="tab" href="#CIBIL">CIBIL</a>
                    <i className="far fa-clock"></i>
                </li>
            </ul>
            <form>
                <div className="col-md-12 tab-content">
                    <div id="PAN" className="tab-pane active">
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-select form-control">
                                        <option>Select Document Type</option>
                                        <option>Company PAN</option>
                                        <option>Aadhar Card</option>
                                        <option>Driving License</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        placeholder="Document Number" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" />
                            </div>
                        </div>
                    </div>
                    <div id="CIBIL" className="tab-pane">
                        <div className="d-flex dashboard-form-row">
                            <img className='cibil-img' src={cibilImg} />
                        </div>
                    </div>
                    <div className="col-md-12 form-add-button">
                        <button type="button" className="btn btn-secondary me-5">Skip</button>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default BusinessVerfication