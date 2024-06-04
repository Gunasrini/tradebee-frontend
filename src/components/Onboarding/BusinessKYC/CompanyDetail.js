import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calenderIcon from '../../../assets/images/icons/calendar.svg';
import arrowDownIcon from '../../../assets/images/icons/arrow-down.svg';
import editIcon from '../../../assets/images/icons/edit.svg';
import deleteIcon from '../../../assets/images/icons/delete.svg';
import buildingIcon from '../../../assets/images/icons/building.svg';
import moment from 'moment';
import Swal from "sweetalert2";

function CompanyDetail() {
  const [companyDetailsData, setCompanyDetailsData] = useState([]);
  const [companyDetailsResult, setCompanyDetailsResult] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  console.log("dateeeeeeeeeeeeeeee",selectedDate);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [isAddBtnClicked, isSetAddBtnClicked] = useState(false);
  const [formData, setFormData] = useState({
    companytype: "",
    businessnature: "",
    industrytype: "",
    collateraltype:"",
  })

  const loadCompanyTypes = "https://api.binary-coders.in/businesskyc/loadcompanytypes";
  const loadBusinessNature = "https://api.binary-coders.in/businesskyc/loadbusinessnature";
  const loadIndustryTypes = "https://api.binary-coders.in/businesskyc/loadindustrytypes";
  const loadCollateralTypes = "https://api.binary-coders.in/businesskyc/loadcollateraltypes";

  const storeCompanyDetails = "https://api.binary-coders.in/businesskyc/storecompanydetails";
  const updateCompanyDetails = "https://api.binary-coders.in/businesskyc/updateCompanyDetail";
  const deleteCompanyDetails = "https://api.binary-coders.in/businesskyc/deleteCompanyDetail";

  const promise1 = axios.get(loadCompanyTypes);
  const promise2 = axios.get(loadBusinessNature);
  const promise3 = axios.get(loadIndustryTypes);
  const promise4 = axios.get(loadCollateralTypes);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log("valueeeeeeeeeeeee",name,value);
    const newFormData = Object.assign({}, formData, { [name]: value });
    console.log("newFormmmmmmmmmmmmmmm",newFormData);
    setFormData(newFormData);
  };

  useEffect(() => {
    Promise.all([promise1, promise2, promise3, promise4]).then((res) => {
      setCompanyDetailsData(res);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    if (isChecked2) {
      const { collateraltype, ...formDataWithoutCollateral } = formData;
      const allDropdownsSelected = Object.values(formDataWithoutCollateral).every(value => value !== "");
      setIsValid(allDropdownsSelected);
    } else if (isChecked1) {
      setIsValid(Object.values(formData).every(value => value !== ""));
    } else {
      setIsValid(false);
    }
  }, [formData, isChecked1, isChecked2]);
  
  const handleCheck1Change = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
  };

  const handleCheck2Change = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false);
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");
    axios({
      method: 'post',
      url: storeCompanyDetails,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        uid: user_id,
        incorporationDate: selectedDate,
        companyType: formData.companytype,
        businessNature: formData.businessnature,
        industryType: formData.industrytype,
        collateralLoan: 0,
        collateralType: formData.collateraltype,
      },
    })
    .then(response => {
      console.log(response.data);
      localStorage.setItem("company_id", response.data.cid);
      getCompanyDetails();
      isSetAddBtnClicked(true);
    })
    .catch(error => {
      console.error("Error:", error.response);
    });
  };
  

  const getCompanyDetails = () => {
    const uid = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");

    axios.get(`https://api.binary-coders.in/businesskyc/getcompanydetails/${uid}/${cid}`)
    .then((res) => {
      console.log("getCompanyDetails:", res);
      if (res.status === 200) {
        Swal.fire({
            icon: 'success',
            title: 'Company Details Added Successfully!',
        }).then((result) => {
            if (result.isConfirmed) {
              setCompanyDetailsResult(res.data);
            }
        });
    }      
    });
  };

  const handleAddButtonEdit = (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");
    axios({
      method: 'POST',
      url: updateCompanyDetails,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        uid: user_id,
        cid: cid,
        incorporationDate: selectedDate,
        companyType: formData.companytype,
        businessNature: formData.businessnature,
        industryType: formData.industrytype,
        collateralLoan: 0,
        collateralType: formData.collateraltype,
      },
    })
    .then(response => {
      console.log(response);
      isSetAddBtnClicked(false);
      setSelectedDate(companyDetailsResult[0].date);      
    })
    .catch(error => {
      console.error("Error:", error.response);
    });
  };

  const handleAddButtonDelete = (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");
    axios({
      method: 'POST',
      url: deleteCompanyDetails,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        uid: user_id,
        cid: cid,
      },
    })
    .then(res => {
      if (res.status === 200) {
        console.log('Password set successfully:');
        Swal.fire({
            icon: 'success',
            title: 'Company Details Deleted Successfully!',
        }).then((result) => {
            if (result.isConfirmed) {
              isSetAddBtnClicked(false);
              setSelectedDate("");
              setFormData("");
            }
          });
      }      
    })
    .catch(error => {
      console.error("Error:", error.response);
    });
  };

  // useEffect(() => {
  //   getCompanyDetails();
  // }, []);

  return (
    <>
      <div>
        <h3>Company Detail</h3>
        {!isAddBtnClicked && (
          <>
            
            <form>
              <div className="col-md-12">
                <div className="col-md-6 d-flex dashboard-form-row">
                  <div className="form-group">
                    <span className="form-control-icon"><img src={calenderIcon}></img></span>
                    <DatePicker
                      className="form-select date-picker form-control"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(moment(date).format('YYYY-MM-DD'))} placeholderText="Incorporation Date"
                    />
                  </div>
                  <div className="form-group">
                    <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select className="form-select form-control" value={formData.companytype} onChange={handleChange} name="companytype" style={{color: formData.companytype ? '#3276E8' : '#5A5A5A'}}>
                        <option value="">Company Type</option>
                        {
                            companyDetailsData[0]?.data.map((item) => (
                              <option key={item.id} value={item.id}>{item.type}</option>
                            ))
                        }
                    </select>
                  </div>
                </div>
                <div className="col-md-6 d-flex dashboard-form-row">
                  <div className="form-group">
                    <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select className="form-select form-control" value={formData.businessnature} onChange={handleChange} name="businessnature" style={{color: formData.businessnature ? '#3276E8' : '#5A5A5A'}}>
                        <option value="">Nature of Business</option>
                        {
                            companyDetailsData[1]?.data.map((item) => (
                              <option key={item.id} value={item.id}>{item.BusinessNature}</option>
                            ))
                        }
                    </select>
                  </div>
                  <div className="form-group">
                  <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select className="form-select form-control" value={formData.industrytype} onChange={handleChange} name="industrytype" style={{color: formData.industrytype ? '#3276E8' : '#5A5A5A'}}>
                        <option value="">Industry Type</option>
                        {
                            companyDetailsData[2]?.data.map((item) => (
                              <option key={item.id} value={item.id}>{item.IndustryType}</option>
                            ))
                        }
                    </select>
                  </div>
                </div>
                <div className="col-md-6 d-flex dashboard-form-row">
                  <div className="form-group">
                    <label className="collateral-label">
                      <strong>Wish to take loan against collateral?</strong>
                    </label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="checkbox"
                          checked={isChecked1}
                          onChange={handleCheck1Change}
                        />
                        <span>Yes</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          checked={isChecked2}
                          onChange={handleCheck2Change}
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  {isChecked1 == true && (
                    <div className="form-group">
                      <div className="form-group">
                      <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                        <select className="form-select form-control" value={formData.collateraltype} onChange={handleChange} name="collateraltype" style={{color: formData.collateraltype ? '#3276E8' : '#5A5A5A'}}>
                        <option value="">Select Collateral Type</option>
                        {
                            companyDetailsData[3]?.data.map((item) => (
                              <option key={item.id} value={item.id}>{item.CollateralType}</option>
                            ))
                        }
                    </select>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-12 form-add-button">
                  <button
                className="btn btn-secondary login-width"
                onClick={handleAddButtonClick}
                disabled={!isValid || !selectedDate}
                type="button">Add</button>
                </div>
              </div>
            </form>
          </>
        )}
        {isAddBtnClicked && (
        <div className="modal-content company-detail-modal">
          <h2>
            <span className="company-title"><img src={buildingIcon}/></span> ABC Exports Limited
          </h2>
            <div className="col-md-12 d-flex">
                <div className="col-md-9">
                  <h4>
                    <strong>Date: </strong>
                    <span>{moment(companyDetailsResult[0]?.date).format('DD-MM-YYYY')}</span>
                  </h4>
                  <h4>
                    <strong>Company Type: </strong>
                    <span>{companyDetailsResult[0]?.companytype}</span>
                  </h4>
                  <h4>
                    <strong>Nature of Business: </strong>
                    <span>{companyDetailsResult[0]?.busniessnature}</span>
                  </h4>
                  <h4>
                    <strong>Industry Type: </strong>
                    <span>{companyDetailsResult[0]?.industrytype}</span>
                  </h4>
                  <h4>
                    <strong>Collateral: </strong>
                    <span>{companyDetailsResult[0]?.collateraltype}</span>
                  </h4>
                </div>
              

              <div className="col-md-3">
                <span className="icons" onClick={handleAddButtonEdit}>
                  <img src={editIcon} />
                </span>
                <span className="icons" onClick={handleAddButtonDelete}>
                  <img src={deleteIcon} />
                </span>
              </div>
            </div>
        </div>
        )}
      </div>
    </>
  );
}

export default CompanyDetail;