import { useEffect, useState } from "react";

function BusinessAddress() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [area, setArea] = useState("");
  const [ownershipStatus, setOwnershipStatus] = useState("");
  const [busibessAddress, setBusinessAddress] = useState([]);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };
  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleOwnershipChange = (event) => {
    setOwnershipStatus(event.target.value);
  };

  const handleAddButtonClick = () => {
    const uid = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");
    console.log("ddddddddddddd", uid);
    fetch(`http://localhost:8081/api/updateCompanyDetails/${cid}/${uid}`, {
      method: "PUT",
      body: JSON.stringify({
        address: address,
        city: city,
        state: selectedState,
        postalCode: postalCode,
        area: area,
        propertyOwnership: ownershipStatus,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // Convert the response to JSON
      .then((data) => {
        alert("Business Address Saved Successfully");
        getBusinessAddress();
        console.log("data", data);
        setAddress("");
        setCity("");
        setSelectedState("");
        setPostalCode("");
        setArea("");
        setOwnershipStatus("");
      })
      .catch((err) => console.log(err));
  };

  const getBusinessAddress = () => {
    const uid = localStorage.getItem("user_id");
    const cid = localStorage.getItem("company_id");
    const requestData = {
      cid: cid,
      uid: uid,
    };

    fetch("http://localhost:8081/api/getBusniessAddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", data);
        setBusinessAddress(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getBusinessAddress();
  },[]);

  return (
    <div>
      {Array.isArray(busibessAddress) && busibessAddress.length === 0 && (
        <>
          <h3>Business Address</h3>
          <form>
            <div className="col-md-12">
              <div className="dashboard-form-row">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control w-100"
                    placeholder="Address"
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>
              <div className="d-flex dashboard-form-row three-columns">
                <div className="col-md-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      value={city}
                      onChange={handleCityChange}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <select
                      className="form-select form-control"
                      value={selectedState}
                      onChange={handleStateChange}
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
                      placeholder="Postal Code"
                      value={postalCode}
                      onChange={handlePostalCodeChange}
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
                      value={area}
                      onChange={handleAreaChange}
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
                  type="button"
                  className="btn bg-primary login-width"
                  onClick={handleAddButtonClick}
                >
                  Adda
                </button>
              </div>
            </div>
          </form>
        </>
      )}

      {Array.isArray(busibessAddress) && busibessAddress.length > 0 && (
        <div>
          <div className="modal-content company-detail-modal">
            <div className="modal-header">
              <h2>Business Address</h2>
              <button
                className="btn btn-primary btn-sm"
                style={{ position: "absolute", top: "10px", right: "10px" }}
                data-bs-toggle="modal"
                data-bs-target="#addressModal"
              >
                Add
              </button>
            </div>
            <div className="col-md-12 d-flex">
              <div className="col-md-9">
                <h4>
                  <strong>Address: </strong>{" "}
                  <span>{busibessAddress[0].address}</span>
                </h4>
                <h4>
                  <strong>Area: </strong> <span>{busibessAddress[0].area}</span>
                </h4>
                <h4>
                  <strong>City: </strong> <span>{busibessAddress[0].city}</span>
                </h4>
                <h4>
                  <strong>Postal Code: </strong>{" "}
                  <span>{busibessAddress[0].postcode}</span>
                </h4>
                <h4>
                  <strong>State: </strong>{" "}
                  <span>{busibessAddress[0].state}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="modal fade"
        id="addressModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addressModalLabel">
                Business Address
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="col-md-12">
                  <div className="dashboard-form-row">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-100"
                        placeholder="Address"
                        value={address}
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>
                  <div className="d-flex dashboard-form-row three-columns">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                          value={city}
                          onChange={handleCityChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <select
                          className="form-select form-control"
                          value={selectedState}
                          onChange={handleStateChange}
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
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
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
                          placeholder="Postal Code"
                          value={postalCode}
                          onChange={handlePostalCodeChange}
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
                          value={area}
                          onChange={handleAreaChange}
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
                      type="button"
                      className="btn bg-primary login-width"
                      onClick={handleAddButtonClick}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessAddress;
