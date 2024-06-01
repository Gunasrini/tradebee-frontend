import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calenderIcon from '../../../assets/images/icons/calendar.svg';
import arrowDownIcon from '../../../assets/images/icons/arrow-down.svg';

function CompanyDetail() {
  const [companyDetailsData, setCompanyDetailsData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({
    companytype: "",
    businessnature: "",
    industrytype: "",
  })

  const loadCompanyTypes = "https://api.binary-coders.in/businesskyc/loadcompanytypes";
  const loadBusinessNature = "https://api.binary-coders.in/businesskyc/loadbusinessnature";
  const loadIndustryTypes = "https://api.binary-coders.in/businesskyc/loadindustrytypes";
  const loadCollateralTypes = "https://api.binary-coders.in/businesskyc/loadcollateraltypes";

  const storeCompanyDetails = "https://api.binary-coders.in/businesskyc/storecompanydetails";

  const promise1 = axios.get(loadCompanyTypes);
  const promise2 = axios.get(loadBusinessNature);
  const promise3 = axios.get(loadIndustryTypes);
  const promise4 = axios.get(loadCollateralTypes);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newFormData = Object.assign({}, formData, { [name]: value });
    setFormData(newFormData);
  };

  useEffect(() => {
    Promise.all([promise1, promise2, promise3, promise4]).then((res) => {
      setCompanyDetailsData(res);
      console.log(res);
    });
  }, []);


  useEffect(() => {
    if (formData !== null) {
      setIsValid(Object.values(formData).every((value) => value !== ""));
    }
  }, [formData]);
  

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
      body: JSON.stringify({
        uid: user_id,
        incorporationDate: selectedDate,
        companyType: formData.companytype,
        businessNature: formData.businessnature,
        industryType: formData.industrytype,
        collateralType: "",
      }),
    })
    .then(response => {
      console.log(response.data);
      getCompanyDetails();
    })
    .catch(({response}) => {
      console.log(response);
    });
  };

  const getCompanyDetails = () => {
    const uid = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");

    axios.get(`https://api.binary-coders.in/businesskyc/getcompanydetails/${uid}/${cid}`)
    .then((res) => {
      console.log("getCompanyDetails:", res);
    });
  };

  // useEffect(() => {
  //   getCompanyDetails();
  // }, []);

  return (
    <>
      <div>
        {(
          <>
            <h3>Company Detail</h3>
            <form>
              <div className="col-md-12">
                <div className="col-md-6 d-flex dashboard-form-row">
                  <div className="form-group">
                    <span className="form-control-icon"><img src={calenderIcon}></img></span>
                    <DatePicker
                      className="form-select date-picker form-control"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}                      placeholderText="Incorporation Date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                  <div className="form-group">
                    <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select className="form-select form-control" onChange={handleChange} name="companytype">
                        <option value="">Company Type</option>
                        {
                            companyDetailsData[0]?.data.map((item) => (
                              <option key={item.id}>{item.type}</option>
                            ))
                        }
                    </select>
                  </div>
                </div>
                <div className="col-md-6 d-flex dashboard-form-row">
                  <div className="form-group">
                    <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select className="form-select form-control" onChange={handleChange} name="businessnature">
                        <option value="">Nature of Business</option>
                        {
                            companyDetailsData[1]?.data.map((item) => (
                              <option key={item.id}>{item.BusinessNature}</option>
                            ))
                        }
                    </select>
                  </div>
                  <div className="form-group">
                  <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select className="form-select form-control" onChange={handleChange} name="industrytype">
                        <option value="">Industry Type</option>
                        {
                            companyDetailsData[2]?.data.map((item) => (
                              <option key={item.id}>{item.IndustryType}</option>
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
                        <select className="form-select form-control" onChange={handleChange}>
                        <option value="">Select Collateral Type</option>
                        {
                            companyDetailsData[3]?.data.map((item) => (
                              <option key={item.id}>{item.CollateralType}</option>
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
                disabled={!isValid}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#companyDetailModal"
              >
                Add
              </button>
                </div>
              </div>
            </form>
          </>
        )}

            <div className="modal-content company-detail-modal">
            <h2>
              <i className="fas fa-building"></i> ABC Exports Limited
            </h2>
            <div className="col-md-12 d-flex">
              {(
                <div className="col-md-9">
                  <h4>
                    <strong>Date: </strong>
                    {/* <span>{companyDetails[0].date}</span> */}
                  </h4>
                  <h4>
                    <strong>Company Type: </strong>
                    <span>{formData.companytype}</span>
                  </h4>
                  <h4>
                    <strong>Nature of Business: </strong>
                    <span>{formData.businessnature}</span>
                  </h4>
                  <h4>
                    <strong>Industry Type: </strong>
                    <span>{formData.industrytype}</span>
                  </h4>
                  <h4>
                    <strong>Collateral: </strong>
                    {/* <span>{formData.collateraltype}</span> */}
                  </h4>
                </div>
              )}

              <div className="col-md-3">
                <span className="icons">
                  <i className="fas fa-edit"></i>
                </span>
                <span className="icons">
                  <i className="fas fa-trash"></i>
                </span>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default CompanyDetail;
