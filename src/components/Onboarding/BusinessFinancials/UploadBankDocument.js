export default function UploadBankDocument() {
    return (
        <div>
            <h3>Upload Bank Document</h3>
            <form>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <select className="form-select form-control">
                                <option>Bank Name</option>
                                <option>HDFC</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Account Number" />
                        </div>
                    </div>
                </div>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Statement From" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Statement To" />
                        </div>
                    </div>
                </div>
            </form>
            <ul className="bank-list balance-sheet">
                <li>
                    <span className="icon"><i className="far fa-file-excel"></i></span>
                    <div className="bank-info">
                        <h4>Balance Sheet (FY 2021-22)</h4>
                    </div>
                    <div className='cash-text'>
                        <p>01 April 2021 30 sep 2022</p>
                    </div>
                    <div className="edit-del-icon">
                        <i className="fas fa-eye"></i>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash"></i>
                    </div>
                </li>
                <li>
                    <span className="icon"><i className="far fa-file-excel"></i></span>
                    <div className="bank-info">
                        <h4>Balance Sheet (FY 2022-23)</h4>
                    </div>
                    <div className='cash-text'>
                        <p>01 April 2021 30 sep 2022</p>
                    </div>
                    <div className="edit-del-icon">
                        <i className="fas fa-eye"></i>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash"></i>
                    </div>
                </li>
                <li>
                    <span className="icon"><i className="far fa-file-excel"></i></span>
                    <div className="bank-info">
                        <h4>Balance Sheet (FY 2023-24)</h4>
                    </div>
                    <div className='cash-text'>
                        <p>01 April 2021 30 sep 2022</p>
                    </div>
                    <div className="edit-del-icon">
                        <i className="fas fa-eye"></i>
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash"></i>
                    </div>
                </li>
            </ul>
        </div>
    )
}