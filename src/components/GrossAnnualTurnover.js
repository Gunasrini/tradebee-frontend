import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function GrossAnnualTurnover() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isContinueEnableButton, setIsContinueEnableButton] = useState(false);

  const handleCheck1Change = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsContinueEnableButton(!isChecked1);
  };

  const handleCheck2Change = () => {
    setIsChecked2(!isChecked2);
    setIsChecked1(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsContinueEnableButton(!isChecked2);
  };

  const handleCheck3Change = () => {
    setIsChecked3(!isChecked3);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked4(false);
    setIsChecked5(false);
    setIsContinueEnableButton(!isChecked3);
  };

  const handleCheck4Change = () => {
    setIsChecked4(!isChecked4);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked5(false);
    setIsContinueEnableButton(!isChecked4);
  };

  const handleCheck5Change = () => {
    setIsChecked5(!isChecked5);
    setIsChecked1(false);
    setIsChecked2(false);
    setIsChecked3(false);
    setIsChecked4(false);
    setIsContinueEnableButton(!isChecked5);
  };

  return (
    <>
      <Header />
      <div className="text-center mb-4 mt-5 pb-2">
        <h2 className="register-cont">Gross Annual Turnover</h2>
      </div>
      <div className='basic-info-wrap'>
        <div className="amount-range col-6 mb-4" style={{ borderColor: isChecked1 ? "#3276E8" : "#BBBBBB" }}>
          <div className="left-text">
            <p>Below 10 Lacs</p>
          </div>
          <label className='right-checkbox'>
            <input
              className="checkBox"
              type="checkbox"
              checked={isChecked1}
              onChange={handleCheck1Change}
            />
          </label>
        </div>

        <div
          className="amount-range col-6 mb-4"
          style={{ borderColor: isChecked2 ? "#3276E8" : "#BBBBBB" }}
        >
          <div className="left-text">
            <p>10-25 Lacs</p>
          </div>
          <label className='right-checkbox'>
            <input
              className="checkBox"
              type="checkbox"
              checked={isChecked2}
              onChange={handleCheck2Change}
            />
          </label>
        </div>

        <div className="amount-range col-6 mb-4" style={{ borderColor: isChecked3 ? "#3276E8" : "#BBBBBB" }}>
          <div className="left-text">
            <p>25-50 Lacs</p>
          </div>
          <label className='right-checkbox'>
            <input
              className="checkBox"
              type="checkbox"
              checked={isChecked3}
              onChange={handleCheck3Change}
            />
          </label>
        </div>

        <div className="amount-range col-6 mb-4" style={{ borderColor: isChecked4 ? "#3276E8" : "#BBBBBB" }}>
          <div className="left-text">
            <p>Above 50 Lacs</p>
          </div>
          <label className='right-checkbox'>
            <input
              className="checkBox"
              type="checkbox"
              checked={isChecked4}
              onChange={handleCheck4Change}
            />
          </label>
        </div>

        <div className="amount-range col-6 mb-4" style={{ borderColor: isChecked5 ? "#3276E8" : "#BBBBBB" }}>
          <div className="left-text">
            <p>Above 50 Lacs</p>
          </div>
          <label className='right-checkbox'>
            <input
              className="checkBox"
              type="checkbox"
              checked={isChecked5}
              onChange={handleCheck5Change}
            />
          </label>
        </div>
      </div>

      <div className="text-center mt-5">
        {isContinueEnableButton ? (
          <Link
            to="/dashboard/onboarding/business-kyc"
            className="btn btn-primary login-width"
          >
            Continue
          </Link>
        ) : (
          <button className="btn btn-primary login-width" disabled>
            Continue
          </button>
        )}
      </div>
    </>
  );
}

export default GrossAnnualTurnover;
