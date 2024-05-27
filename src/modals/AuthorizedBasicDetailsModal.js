export default function AuthorizedBasicDetailsModal() {
    return (
        <div className="modal modal-lg" id="authorizedBasicDetailsModal">
            <div className="modal-dialog">
                <div className="modal-content company-detail-modal">
                    <div className="col-md-12 d-flex">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                alt="" className="avatar-img rounded" />
                        </div>
                        <div className="col-md-8">
                            <h2> Mr. Kabir Singh (Authorized Signatory)</h2>
                            <h4><strong>Mobile Number: </strong> <span>99xxxxxxx38</span></h4>
                            <h4><strong>Email ID: </strong> <span>sxxxxx@gmail.com</span></h4>
                            <h4><strong>Date of Birth: </strong> <span>01 - 07 - 1990</span></h4>
                            <h4><strong>Age: </strong> <span>32 Years 9 Months</span></h4>
                            <h4><strong>Marital Status: </strong> <span>Single</span></h4>
                            <h4><strong>Aadhar Photo Match: </strong> <span className="text-primary">80%</span></h4>
                            <h4><strong>Pan KYC: </strong> <span className="text-primary">Verified</span></h4>
                            <h4><strong>Aadhar KYC: </strong> <span className="text-primary">Verified</span></h4>
                        </div>
                        <div className="col-md-1 d-flex align-items-center">
                            <span className="icons"><i className="fas fa-edit"></i></span>
                            <span className="icons"><i className="fas fa-trash"></i></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}