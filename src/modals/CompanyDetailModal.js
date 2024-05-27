function CompanyDetailModal() {
    return (
        <div className="modal modal-lg" id="companyDetailModal">
            <div className="modal-dialog">
                <div className="modal-content company-detail-modal">
                    <h2><i className="fas fa-building"></i> ABC Exports Limited</h2>
                    <div className="col-md-12 d-flex">
                        <div className="col-md-9">
                            <h4><strong>Company Type: </strong> <span>Limited Company</span></h4>
                            <h4><strong>Nature of Business: </strong> <span>Manufacturing</span></h4>
                            <h4><strong>Industry Type: </strong> <span>Foods</span></h4>
                            <h4><strong>Collateral: </strong> <span>Residence Property</span></h4>
                        </div>
                        <div className="col-md-3">
                            <span className="icons"><i className="fas fa-edit"></i></span>
                            <span className="icons"><i className="fas fa-trash"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CompanyDetailModal