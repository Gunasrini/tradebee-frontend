import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function BusinessAddress() {
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [selectedState, setSelectedState] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  // const [area, setArea] = useState("");
  const [ownershipStatus, setOwnershipStatus] = useState("");
  // const [busibessAddress, setBusinessAddress] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    area: "",
    selectedState:"",
    postalCode:"",
  })

  const storeBusinessAddress = "https://api.binary-coders.in/businesskyc/addBusinessAddress";

  // const handleAddressChange = (event) => {
  //   setAddress(event.target.value);
  // };
  // const handleCityChange = (event) => {
  //   setCity(event.target.value);
  // };
  // const handleStateChange = (event) => {
  //   setSelectedState(event.target.value);
  // };
  // const handlePostalCodeChange = (event) => {
  //   setPostalCode(event.target.value);
  // };
  // const handleAreaChange = (event) => {
  //   setArea(event.target.value);
  // };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    console.log("valueeeeeeeeeeeee",name,value);
    const newFormData = Object.assign({}, formData, { [name]: value });
    console.log("newFormmmmmmmmmmmmmmm",newFormData);
    setFormData(newFormData);
  };

  useEffect(() => {
    if (formData !== null) {
      setIsValid(Object.values(formData).every((value) => value !== ""));
    }
  }, [formData]);

  const handleOwnershipChange = (event) => {
    setOwnershipStatus(event.target.value);
  };

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    const uid = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");
    axios({
      method: 'post',
      url: storeBusinessAddress,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        cid: cid,
        uid : uid,
        address: formData.address,
        city: formData.city,
        state: formData.selectedState,
        postcode: formData.postalCode,
        area: formData.area,
        proowner: 1
      },
    })
    .then(response => {
      console.log(response.data);
      localStorage.setItem("company_id", response.data.cid);
      getBusinessAddress();
    })
    .catch(error => {
      console.error("Error:", error.response);
    });
  };

  const getBusinessAddress = () => {
    const cid = localStorage.getItem("company_id");

    axios.get(`https://api.binary-coders.in/businesskyc/getbusinessaddress/${cid}`)
    .then((res) => {
      console.log("getBusinessAddress:", res);
      if (res.status === 200) {
        Swal.fire({
            icon: 'success',
            title: 'Business Address Added Successfully!',
        }).then((result) => {
            if (result.isConfirmed) {
              // setCompanyDetailsResult(res.data);
            }
        });
    }      
    });
  };

  // useEffect(() => {
  //   getBusinessAddress();
  // },[]);

  return (
    <div>
      {(
        <>
          <h3>Business Address</h3>
          <form>
            <div className="col-md-12">
              <div className="dashboard-form-row">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control w-100"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="d-flex dashboard-form-row three-columns">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-select form-control"
                      name="selectedState"
                      value={formData.selectedState}
                      onChange={handleChange}
                    >
                      <option value="">State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex dashboard-form-row">
                <div className="col-md-8">
                  <div className="form-group">
                    <span className="form-control-icon">
                      <i className="fas fa-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Area"
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>
                      <strong>Property Ownership</strong>
                    </label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="checkbox"
                          name="ownership"
                          value="Owned"
                          onChange={handleOwnershipChange}
                          checked={ownershipStatus === "Owned"}
                        />
                        <span>Owned</span>
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="ownership"
                          value="Rented"
                          onChange={handleOwnershipChange}
                          checked={ownershipStatus === "Rented"}
                        />
                        <span>Rented</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 form-add-button">
              <button
                className="btn btn-secondary login-width"
                onClick={handleAddButtonClick}
                disabled={!isValid}>
                Add
              </button>
              </div>
            </div>
          </form>
        </>
      )}

      
    </div>
  );
}

export default BusinessAddress;
