import React from 'react'

export default function UploadBalanceSheet() {
    return (
        <div className="documents-section">
            <h3>Upload Balance Sheet</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link active" data-bs-toggle="tab" href="#currentYear">Current Year</a>
                    <i className="far fa-clock"></i>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" data-bs-toggle="tab" href="#lastYear">Last Year</a>
                    <i className="far fa-clock"></i>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" data-bs-toggle="tab" href="#yeareBefore">Year Before</a>
                    <i className="far fa-clock"></i>
                </li>
            </ul>
            <form>
                <div className="col-md-12 tab-content">
                    <div id="currentYear" className="tab-pane active">
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-select form-control">
                                        <option>Select The Financial Year</option>
                                        <option>FY 2021-22</option>
                                        <option>FY 2022-23</option>
                                        <option>FY 2021-24</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control"
                                        placeholder="Business Turnover (In Lacs)" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" />
                            </div>
                        </div>
                    </div>
                    <div id="lastYear" className="tab-pane">
                        <ul className="bank-list balance-sheet">
                            <li>
                                <span className="icon"><i className="far fa-file-excel"></i></span>
                                <div className="bank-info">
                                    <h4>Balance Sheet (FY 2021-22)</h4>
                                </div>
                                <div className='cash-text'>
                                    <p>Turnover 4.10 Crores</p>
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
                                    <p>Turnover 6.10 Crores</p>
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
                                    <p>Turnover 3.10 Crores</p>
                                </div>
                                <div className="edit-del-icon">
                                    <i className="fas fa-eye"></i>
                                    <i className="fas fa-edit"></i>
                                    <i className="fas fa-trash"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 form-add-button">
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
