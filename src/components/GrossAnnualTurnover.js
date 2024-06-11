import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GrossAnnualTurnover() {
  const [selectedTurnoverId, setSelectedTurnoverId] = useState('');
  const [annualTurnover, setAnnualTurnover] = useState([]);
  const [isContinueEnableButton, setIsContinueEnableButton] = useState(false);
  
  const location = useLocation();
  const Loanamount = location.state?.locan_amount;
  const Emp_type=location.state?.emp_type;
  const navigate=useNavigate();
  const userUpdate=(e)=>{
    e.preventDefault();
    navigate('/dashboard/onboarding/business-kyc');
  }
  useEffect(() => {
    fetch('https://api.binary-coders.in/user/loadTurnOver')
      .then(res => res.json())
      .then(data => {
        console.log("Turnover data:", data);
        setAnnualTurnover(data);
      })
      .catch(error => console.error("Error fetching annual turnover:", error));
  }, []);

  const handleCheckChange = (id) => {
    setSelectedTurnoverId(id);
    setIsContinueEnableButton(true);  
  };

  return (
    <div className="annual-turnover">
      <Header />
      <div className="text-center mb-4 mt-5 pb-2">
        <h2 className="register-cont">Gross Annual Turnover</h2>
      </div>
      <div className='basic-info-wrap'>
        {annualTurnover.map((item, index) => (
          <div key={index} className="amount-range col-6 mb-4" style={{ borderColor: selectedTurnoverId === item.toid ? "#3276E8" : "#BBBBBB" }}>
            <div className="left-text">
              <p>{item.todesc}</p>
            </div>
            <label className='checkbox-wrap right-checkbox'>
              <input
                className="checkBox"
                type="checkbox"
                checked={selectedTurnoverId === item.toid}
                onChange={() => handleCheckChange(item.toid)}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link
          onClick={userUpdate}
          className={`btn btn-primary login-width ${isContinueEnableButton ? "" : "disabled"}`}
          disabled={!isContinueEnableButton}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default GrossAnnualTurnover;