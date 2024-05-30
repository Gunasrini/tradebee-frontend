import { useEffect, useState } from "react";


function TestFormApi() {

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: ""
      });

      const [isValid, setIsValid] = useState(false);

      const handleChange = ({ target }) => {
        const { name, value } = target;
        const newData = Object.assign({}, data, { [name]: value });
        setData(newData);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
      };

      useEffect(() => {
        if (data !== null) {
          setIsValid(Object.values(data).every((value) => value !== ""));
        }
      }, [data]);

    return (

        <div>
      <div className="customizedCards">
        <div className="card cardStyle" style={{padding: '30px'}}>
          <div className="main-form">
            <h5 className="idDetails">GUEST DETAILS</h5>
            <div className="form" style={{ marginLeft: "-10px" }}>
              <div className="form-item"
                name="firstname"
                rules={[{ required: true, message: "firstname is required" }]}
              >
                <input
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  style={{ width: 400 }}
                  placeholder="Firstname"
                />
              </div>
              <div className="form-item"
                name="lastname"
                rules={[{ required: true, message: "lastname is required" }]}
              >
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  style={{ width: 400 }}
                  placeholder="Lastname"
                />
              </div>
              <div className="form-item"
                name="email"
                rules={[{ required: true, message: "email is required" }]}
              >
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  style={{ width: 400 }}
                  placeholder="Email"
                />
              </div>
              {/* <div className="form-item"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!"
                  }
                ]}
              >
                <input
                  type="number"
                  name="phonenumber"
                  onChange={handleChange}
                  addonBefore={prefixSelector}
                  style={{ width: 400 }}
                  placeholder="Phone Number"
                />
              </div> */}
              <button
                className="submit"
                onClick={handleSubmit}
                disabled={!isValid}
                type="primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

}



export default TestFormApi