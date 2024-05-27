import React from 'react'

export default function GSTValidation() {
    return (
        <>
            <h3>GST Validation</h3>
            <ul className="bank-list">
                <li>
                    <span className="icon"><i className="fas fa-university"></i></span>
                    <div className="bank-info">
                        <h4>GST Verification</h4>
                        <p><strong>GST:</strong> xxxxxx0000123 <strong> State:</strong> Tamilnadu <strong> User ID:</strong> abc1230000</p>
                    </div>
                    <div className="edit-del-icon">
                        <i className="fas fa-edit"></i>
                        <i className="fas fa-trash"></i>
                    </div>
                    <span className="verified-text"><i className="far fa-clock"></i> Verified</span>
                </li>
            </ul>
            <div className='download-userguide-btn'>
                <button className='btn btn-outline-primary'><i className="fas fa-download"></i> Download User Guide</button>
            </div>
            <div className="KYC-completion">
                <li>
                    <i className="fas fa-file-alt"></i>
                    <h3><i className="fas fa-plus text-primary"></i> Consent to view your GST Inputs</h3>
                </li>
            </div>
            <div className="gst-information company-detail-modal">
                <h2>GST Filing/Inputs</h2>
                <div className="col-md-12 d-flex">
                    <div className="col-md-9">
                        <h4><strong>GST Status: </strong> <span className='text-danger'>Cancelled</span></h4>
                        <h4><strong>GST Name vs Company Name: </strong> <span className='text-primary'>100% Match</span></h4>
                        <h4><strong>Fake Invoices Check: </strong> <span className='text-primary'>No data found</span></h4>
                        <h4><strong>Interest and late fee: </strong> <span className='text-primary'>No data found</span></h4>
                    </div>
                </div>
            </div>
        </>
    )
}
