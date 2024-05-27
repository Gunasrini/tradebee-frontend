export default function DirectorsBasicInfo() {
    return (
        <div>
            <h3>Directors Basic Info</h3>
            <form>
                <div className="col-md-12">
                    <div className="dashboard-form-row">
                        <div className="form-group photo-upload">
                            <input type="file" className="form-control" placeholder="First Name" />
                            <div className="passport-photo-sec border-primary">
                                <i className="fas fa-cloud-upload-alt"></i>
                                <h5>Passport size Photograph</h5>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex dashboard-form-row three-columns">
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-select form-control">
                                    <option>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex dashboard-form-row three-columns">
                        <div className="col-md-4">
                            <div className="form-group">
                                <select className="form-select form-control">
                                    <option>Father / Spouse</option>
                                    <option>Father</option>
                                    <option>Spouse</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile Number" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email ID" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex dashboard-form-row three-columns">
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="date" className="form-control" placeholder="Date of Birth" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label><strong>Marital Status</strong></label>
                                <div className="radio-group">
                                    <label><input type="checkbox" /> <span>Single</span></label>
                                    <label><input type="checkbox" />
                                        <span>Married</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 form-add-button">
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}