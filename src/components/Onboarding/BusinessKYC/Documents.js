import React, { useState } from 'react';

function Documents() {
    const [documentTypeCIN, setDocumentTypeCIN] = useState("");
    const [documentNumberCIN, setDocumentNumberCIN] = useState("");
    const [documentIssueDateCIN, setDocumentIssueDateCIN] = useState("");
    const [fileCIN, setFileCIN] = useState(null);

    const [documentTypeMOA, setDocumentTypeMOA] = useState("");
    const [documentNumberMOA, setDocumentNumberMOA] = useState("");
    const [fileMOA, setFileMOA] = useState(null);

    const [documentTypeAOA, setDocumentTypeAOA] = useState("");
    const [documentNumberAOA, setDocumentNumberAOA] = useState("");
    const [fileAOA, setFileAOA] = useState(null);
    const [DocType,setDocType]=useState('CIN');
    console.log("doctttttttttppypeeeeeeee",DocType);

    const handleDocumentTypeCINChange = (e) => {
        setDocumentTypeCIN(e.target.value);
    };

    const handleDocumentNumberCINChange = (e) => {
        setDocumentNumberCIN(e.target.value);
    };

    const handleDocumentIssueDateCINChange = (e) => {
        setDocumentIssueDateCIN(e.target.value);
    };

    const handleFileCINChange = (e) => {
        const file = e.target.files[0];
        console.log("fffffffffffffff",file);
        setFileCIN(file);
    };

    const handleDocumentTypeMOAChange = (e) => {
        setDocumentTypeMOA(e.target.value);
    };

    const handleDocumentNumberMOAChange = (e) => {
        setDocumentNumberMOA(e.target.value);
    };

    const handleFileMOAChange = (e) => {
        const file = e.target.files[0];
        setFileMOA(file);
    };

    const handleDocumentTypeAOAChange = (e) => {
        setDocumentTypeAOA(e.target.value);
    };

    const handleDocumentNumberAOAChange = (e) => {
        setDocumentNumberAOA(e.target.value);
    };

    const handleFileAOAChange = (e) => {
        const file = e.target.files[0];
        setFileAOA(file);
    };

    const docType=(type)=>{
        setDocType(type);
    }

    const handleSubmit = () => {
        // Prepare data to send
        const formData = new FormData();
        if (DocType === 'CIN') {
            formData.append('file', fileCIN); // Ensure this matches with upload.single('fileCIN') in backend
            formData.append('documentTypeCIN', documentTypeCIN);
            formData.append('documentNumberCIN', documentNumberCIN);
            formData.append('documentIssueDateCIN', documentIssueDateCIN);
        }
        if (DocType === 'MOA') {
            formData.append('file', fileMOA); // Ensure this matches with upload.single('fileMOA') in backend
            formData.append('documentTypeMOA', documentTypeMOA);
            formData.append('documentNumberMOA', documentNumberMOA);
            const currentDate = new Date().toISOString().slice(0, 10); 
            const finalDocIdate = currentDate;
            formData.append('documentIssueDateMOA', finalDocIdate);


        }
        if (DocType === 'AOA') {
            formData.append('file', fileAOA); // Ensure this matches with upload.single('fileAOA') in backend
            formData.append('documentTypeAOA', documentTypeAOA);
            formData.append('documentNumberAOA', documentNumberAOA);
        }
    
        // Send data to the backend API
        fetch('http://localhost:8081/api/insertDocument', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            // Handle success
            console.log(response.data);
            setDocumentTypeCIN("")
            setDocumentNumberCIN("")
            setDocumentIssueDateCIN("")
            setFileCIN(null)
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
        });
    };
    
    
    // const handleSubmit = () => {
    //     const uid = localStorage.getItem('user_id');
    //     const cid = localStorage.getItem('company_id');
    
    //     const formData = new FormData();
    //     formData.append('uid', uid);
    //     formData.append('cid', cid);
    //     formData.append('docno', documentNumberCIN);
    //     formData.append('docidate', documentIssueDateCIN);
    //     formData.append('file', fileCIN);
    
    //     fetch('http://localhost:8081/api/insertCINDocument', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //     .then(response => {
    //         // Handle success
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         // Handle error
    //         console.error('Error:', error);
    //     });
    // };
    

    



    return (
        <div className="documents-section">
            <h3>Documents</h3>
            <ul className="nav nav-tabs">
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link active" data-bs-toggle="tab" onClick={() => docType('CIN')} href="#CIN">CIN</a>
                    <i className="far fa-clock"></i>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" data-bs-toggle="tab" onClick={() => docType('MOA')} href="#MOA">MOA</a>
                    <i className="far fa-clock"></i>
                </li>
                <li className="nav-item d-flex align-items-center">
                    <a className="nav-link" data-bs-toggle="tab" onClick={() => docType('AOA')} href="#AOA">AOA</a>
                    <i className="far fa-clock"></i>
                </li>
            </ul>
            <form>
                <div className="col-md-12 tab-content">
                    <div id="CIN" className="tab-pane active">
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-select form-control" onChange={handleDocumentTypeCINChange} value={documentTypeCIN}>
                                        <option value="">Select Document Type</option>
                                        <option value="CIN">Certificate of Incorporation (CIN)</option>
                                        <option value="MOA">Memorandum of Association (MOA)</option>
                                        <option value="AOA">Articles of Association (AOA)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Document Number" onChange={handleDocumentNumberCINChange} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                            <div className="form-group">
                                {/* <span className="form-control-icon"><i className="fas fa-calendar-alt"></i></span> */}
                                <input type="date" className="form-control" placeholder="Document Issue Date" onChange={handleDocumentIssueDateCINChange} />
                            </div>

                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" onChange={handleFileCINChange} />
                            </div>
                        </div>
                    </div>
                    <div id="MOA" className="tab-pane">
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-select form-control" onChange={handleDocumentTypeMOAChange}>
                                        <option value="">Select Document Type</option>
                                        <option value="MOA">Memorandum of Association (MOA)</option>
                                        <option value="CIN">Certificate of Incorporation (CIN)</option>
                                        <option value="AOA">Articles of Association (AOA)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="UXYZZEF546897852" onChange={handleDocumentNumberMOAChange} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" onChange={handleFileMOAChange} />
                            </div>
                        </div>
                    </div>
                    <div id="AOA" className="tab-pane">
                        <div className="d-flex dashboard-form-row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select className="form-select form-control" onChange={handleDocumentTypeAOAChange}>
                                        <option value="">Select Document Type</option>
                                        <option>Articles of Association (AOA)</option>
                                        <option>Memorandum of Association (MOA)</option>
                                        <option>Certificate of Incorporation (CIN)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="UXYZZEF5468972" onChange={handleDocumentNumberAOAChange} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex dashboard-form-row">
                            <div className="form-group">
                                <input type="file" className="form-control file-upload-control" onChange={handleFileAOAChange} />
                            </div>
                        </div>
                        <div className="documents-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Type</th>
                                        <th>Last Edited</th>
                                        <th>Editor</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i className="fas fa-clipboard"></i> Certificate of
                                            Incorporation (CIN)</td>
                                        <td>19/09/2023 <span>5.30 PM</span></td>
                                        <td><img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                            alt="" className="avatar-img" /></td>
                                        <td>
                                            <div className="icons">
                                                <i className="fas fa-eye"></i>
                                                <i className="fas fa-pencil-alt"></i>
                                                <i className="fas fa-trash"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="fas fa-clipboard"></i> Memorandum of
                                            Association (MOA)</td>
                                        <td>19/09/2023 <span>5.30 PM</span></td>
                                        <td><img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                            alt="" className="avatar-img" /></td>
                                        <td>
                                            <div className="icons">
                                                <i className="fas fa-eye"></i>
                                                <i className="fas fa-pencil-alt"></i>
                                                <i className="fas fa-trash"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><i className="fas fa-clipboard"></i> Articles of Association
                                            (AOA)</td>
                                        <td>19/09/2023 <span>5.30 PM</span></td>
                                        <td><img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                            alt="" className="avatar-img" /></td>
                                        <td>
                                            <div className="icons">
                                                <i className="fas fa-eye"></i>
                                                <i className="fas fa-pencil-alt"></i>
                                                <i className="fas fa-trash"></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-12 form-add-button">
                        <button type="button" className="btn btn-secondary me-5">Skip</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Documents;
