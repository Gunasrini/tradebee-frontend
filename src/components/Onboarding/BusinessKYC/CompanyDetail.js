import { useEffect } from "react";
import { useState } from "react";
import CompanyDetailModal from "../../../modals/CompanyDetailModal";
import DatePicker from "react-datepicker";
import BusinessAddress from "./BusinessAddress";
import Documents from "./Documents";
import "react-datepicker/dist/react-datepicker.css";
import calenderIcon from '../../../assets/images/icons/calendar.svg';
import arrowDownIcon from '../../../assets/images/icons/arrow-down.svg';

function CompanyDetail() {
  const [companyTypes, setCompanyTypes] = useState(["Private", "Government", "Corporate"]);
  const [businessNature, setBusinessNature] = useState(["Manufacturer", "Trader/Wholesaler", "Retailer", "Service Provider"]);
  const [industryTypes, setIndustryTypes] = useState(["Food Manufacturing", "Textile", "Others"]);
  const [collateralTypes, setCollateralTypes] = useState(["Property", "Ownership", "Rental"]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [companyDetails, setCompanyDetails] = useState([]);
  const [formData, setFormData] = useState({
    companytype: "",
    businessnature: "",
    industrytype: "",
    // collateraltype: "",
  })

  const handleChange = ({ target }) => {
    const { name, value } = target;
    const newFormData = Object.assign({}, formData, { [name]: value });
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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

  const handleAddButtonClick = () => {
    const user_id = localStorage.getItem("user_id");
    fetch("https://api.binary-coders.in/businesskyc/storecompanydetails", {
      mode: 'no-cors',
      method: "POST",
      body: JSON.stringify({
        // uid: user_id,
        // incorporationDate: selectedDate,
        // companyType: selectedCompanyType,
        // businessNature: selectedBusinessNature,
        // industryType: selectedIndustry,
        // collateralLoan: collateralLoan,
        // collateralType: selectedCollateralType,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // Convert the response to JSON
      .then((data) => {
        alert("Company Details Saved Successfully");
        console.log("data", data);
        localStorage.setItem("company_id", data.cid);
        getComapnyDetails();
      })
      .catch((err) => console.log(err));
    setCompanyTypes([]);
    setBusinessNature([]);
    setIndustryTypes([]);
    setCollateralTypes([]);
    setSelectedDate(null);
  };

  //get company details api
  const getComapnyDetails = () => {
    const uid = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");
    const requestData = {
      cid: cid,
      uid: uid,
    };

    fetch(`https://api.binary-coders.in/businesskyc/getcompanydetails/2/25`)
      .then((res) => res.json())
      .then((data) => {
        setCompanyDetails(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getComapnyDetails();
  }, []);

  return (
    <>
      <div>
        {Array.isArray(companyDetails) && companyDetails.length > 0 && (
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
                      dateFormat="dd/MM/yyyy" // Set your desired date format
                    />
                  </div>
                  <div className="form-group">
                    <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    {/* <select
                      className="form-select form-control"
                      value={selectedCompanyType}
                      onChange={handleCompanyTypeChange}
                    >
                      <option value="">Company Type</option>
                      {companyTypes.map((company, index) => (
                        <option key={index} value={company.id}>
                          {company.type}
                        </option>
                      ))}
                    </select> */}
                    <select className="form-select form-control" onChange={handleChange} name="companytype">
                        <option value="">Company Type</option>
                        {
                          companyTypes.map((item) => (
                            // <h2>{item}</h2>
                            <option key={item}>{item}</option>
                          ))
                        }
                    </select>
                  </div>
                </div>
                <div className="col-md-6 d-flex dashboard-form-row">
                  <div className="form-group">
                    <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    {/* <select
                      className="form-select form-control"
                      value={selectedBusinessNature}
                      onChange={handleBusinessNatureChange}
                    >
                      <option value="">Nature of Business</option>
                      {businessNature.map((business) => (
                        <option key={business.id} value={business.id}>
                          {business.BusinessNature}
                        </option>
                      ))}
                    </select> */}
                    <select className="form-select form-control" onChange={handleChange} name="businessnature">
                        <option value="">Nature of Business</option>
                        {
                          businessNature.map((item) => (
                            // <h2>{item}</h2>
                            <option key={item}>{item}</option>
                          ))
                        }
                    </select>
                  </div>
                  <div className="form-group">
                  <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    {/* <select
                      className="form-select form-control"
                      value={selectedIndustry}
                      onChange={handleIndustryChange}
                    >
                      <option value="">Industry Type</option>
                      {industryTypes.map((industry) => (
                        <option key={industry.id} value={industry.id}>
                          {industry.IndustryType}
                        </option>
                      ))}
                    </select> */}
                    <select className="form-select form-control" onChange={handleChange} name="industrytype">
                        <option value="">Industry Type</option>
                        {
                          industryTypes.map((item) => (
                            // <h2>{item}</h2>
                            <option key={item}>{item}</option>
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
                        />{" "}
                        <span>Yes</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          checked={isChecked2}
                          onChange={handleCheck2Change}
                        />{" "}
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  {isChecked1 == true && (
                    <div className="form-group">
                      <div className="form-group">
                      <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                        {/* <select
                          className="form-select form-control"
                          value={selectedCollateralType}
                          onChange={handleCollateralTypeChange}
                        >
                          <option>Select Collateral Type</option>
                          {collateralTypes.map((coll) => (
                            <option key={coll.id} value={coll.id}>
                              {coll.CollateralType}
                            </option>
                          ))}
                        </select> */}
                        <select className="form-select form-control" onChange={handleChange}>
                        <option value="">Select Collateral Type</option>
                        {
                          collateralTypes.map((item) => (
                            // <h2>{item}</h2>
                            <option key={item}>{item}</option>
                          ))
                        }
                    </select>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-12 form-add-button">
                  {/* <button
                    type="button"
                    className="btn bg-primary login-width"
                    onClick={handleAddButtonClick}
                  >
                    Add
                  </button> */}
                  <button
                className="btn btn-secondary login-width"
                onClick={handleSubmit}
                disabled={!isValid}
                type="button"
              >
                Add
              </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default CompanyDetail;
