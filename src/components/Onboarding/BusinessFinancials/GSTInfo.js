import React from 'react'
import OTPValidationModal from '../../../modals/OTPValidationModal'

export default function GSTInfo() {
    return (
        <div>
            <h3>Enter GST Info</h3>
            <form>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="GSTIN Number" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <select className="form-select form-control">
                                <option>GST Registration State</option>
                                <option>Tamilnadu</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <select className="form-select form-control">
                                <option>Data Consent</option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="GSTIN User Name" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 form-add-button">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#otpValidationModal">Add</button>
                </div>
            </form>
            <OTPValidationModal />
        </div>
    )
}
