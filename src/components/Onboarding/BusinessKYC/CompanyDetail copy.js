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
  const [companyTypes, setCompanyTypes] = useState([]);
  const [businessNature, setBusinessNature] = useState([]);
  const [industryTypes, setIndustryTypes] = useState([]);
  const [collateralTypes, setCollateralTypes] = useState([]);
  console.log("yyyyyyyyyyyyyyyy", collateralTypes);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [selectedCompanyType, setSelectedCompanyType] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [collateralLoan, setcollateralLoan] = useState(1);
  const [selectedBusinessNature, setSelectedBusinessNature] = useState("");
  const [selectedCollateralType, setSelectedCollateralType] = useState("");
  const [companyDetails, setCompanyDetails] = useState([]);
  const [selectedValues, setSelectedValues] = useState({
    companyType: "Test Company",
    businessNature: "Test Business",
    industryType: "Test Industry",
    collateralType: "Test Collateral",
  });

  const [showSelectedValues, setSahowSelectedValues] = useState(false);

  const handleCompanyTypeChange = (event) => {
    setSelectedCompanyType(event.target.value);
  };
  const handleIndustryChange = (event) => {
    setSelectedIndustry(event.target.value);
  };
  const handleBusinessNatureChange = (event) => {
    setSelectedBusinessNature(event.target.value);
  };
  const handleCollateralTypeChange = (event) => {
    setSelectedCollateralType(event.target.value);
  };

  const handleCheck1Change = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
    setcollateralLoan(1);
  };

  const handleCheck2Change = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false);
    setcollateralLoan(0);
  };

  const handleAddButtonClick = () => {
    const user_id = localStorage.getItem("user_id");
    fetch("https://api.binary-coders.in/businesskyc/storecompanydetails", {
      mode: 'no-cors',
      method: "POST",
      body: JSON.stringify({
        uid: user_id,
        incorporationDate: selectedDate,
        companyType: selectedCompanyType,
        businessNature: selectedBusinessNature,
        industryType: selectedIndustry,
        collateralLoan: collateralLoan,
        collateralType: selectedCollateralType,
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
    setSahowSelectedValues(true);
  };

  //get company details api
  const getComapnyDetails = () => {
    const uid = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");
    const requestData = {
      cid: cid,
      uid: uid,
    };

    // fetch(`https://api.binary-coders.in/businesskyc/storecompanydetails`, {
    //   mode: 'no-cors',
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(requestData),
    // })
    fetch(`https://api.binary-coders.in/businesskyc/getcompanydetails/2/25`)
      .then((res) => res.json())
      .then((data) => {
        console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", data);
        setCompanyDetails(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getComapnyDetails();
  }, []);

  // useEffect(() => {
  //   fetch("https://api.binary-coders.in/api/loadCompanyTypes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("dataaaaaaaaaaaaaaa", data);
  //       setCompanyTypes(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   fetch("https://api.binary-coders.in/api/loadBusinessNature")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("yyyyyyyyyyyyyyyyyyy", data);
  //       setBusinessNature(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   fetch("https://api.binary-coders.in/api/loadIndustryTypes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuu", data);
  //       setIndustryTypes(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });

  //   fetch("https://api.binary-coders.in/api/loadCollateralTypes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("llllllllllllllllllllllllll", data);
  //       setCollateralTypes(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  console.log("company details", companyDetails);
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
                      onChange={(date) => setSelectedDate(date)}
                      placeholderText="Incorporation Date"
                      dateFormat="dd/MM/yyyy" // Set your desired date format
                    />
                  </div>
                  <div className="form-group">
                    <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select
                      className="form-select form-control"
                      value={selectedCompanyType}
                      onChange={handleCompanyTypeChange}
                    >
                      <option value="">Company Type</option>
                      {companyTypes.map((company) => (
                        <option key={company.id} value={company.id}>
                          {company.type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6 d-flex dashboard-form-row">
                  <div className="form-group">
                    <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select
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
                    </select>
                  </div>
                  <div className="form-group">
                  <span className="form-control-icon"><img src={arrowDownIcon}></img></span>
                    <select
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
                    </select>
                  </div>
                </div>
                <div className="col-md-6 d-flex dashboard-form-row">
                  <div className="form-group">
                    <label>
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
                        <select
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
                        </select>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-12 form-add-button">
                  <button
                    type="button"
                    className="btn bg-primary login-width"
                    onClick={handleAddButtonClick}
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
              {Array.isArray(companyDetails) && companyDetails.length > 0 && (
                <div className="col-md-9">
                  <h4>
                    <strong>Date: </strong>
                    <span>{companyDetails[0].date}</span>
                  </h4>
                  <h4>
                    <strong>Company Type: </strong>
                    <span>{companyDetails[0].companytype}</span>
                  </h4>
                  <h4>
                    <strong>Nature of Business: </strong>
                    <span>{companyDetails[0].busniessnature}</span>
                  </h4>
                  <h4>
                    <strong>Industry Type: </strong>
                    <span>{companyDetails[0].industrytype}</span>
                  </h4>
                  <h4>
                    <strong>Collateral: </strong>
                    <span>{companyDetails[0].collateraltype}</span>
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
      {/* <BusinessAddress />
      <Documents /> */}
    </>
  );
}

export default CompanyDetail;
