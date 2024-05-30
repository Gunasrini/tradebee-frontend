import React from "react";
import { useMultiStepForm } from "../../../hooks/useMultiStepForm.ts";
import CompanyDetail from "./CompanyDetail";
import BusinessAddress from "./BusinessAddress.js";
import Documents from "./Documents.js";
import BusinessVerfication from "./BusinessVerfication.js";
import BankAccount from "./BankAccount.js";
import BankAccountList from "./BankAccountList.js";

export default function BusinessKYC() {
  const businessInfo = ["Documents", "BusinessAddress", "CompanyDetail"];
  const { step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
    <CompanyDetail />,
    <BusinessAddress />,
    <Documents />,
    <BusinessVerfication />,
    <BankAccount />,
    <BankAccountList />,
  ]);

  function nextPage() {
    if (!isLastStep) return next();
    alert("Steps completed!");
  }
  console.log("step", step);
  return (
    <div className="subcontent-wrapper">
      <div className="title">
        <h3>
          Business KYC{" "}
          <span className="inprogress-text text-primary">In Progess</span>
        </h3>
      </div>
      <div className="inner-dashboard">
        <div className="left-navtabs">
          <ul className="nav flex-column">
            <li className={businessInfo.includes(step?.type.name) ? "nav-item active" : "nav-item"}>
              {/* <i className={businessInfo.includes(step?.type.name) ? "far fa-clock pink" : "far fa-clock"}></i> */}
              <i className="far fa-clock"></i>
              {/* <a
                className="nav-link"
                href="#"
                style={{
                  color: businessInfo.includes(step?.type.name)
                    ? "#3276E8"
                    : "#5A5A5A",
                }}
              >
                Basic Info
              </a> */}
              <a
                className="nav-link"
                href="#">
                Basic Info
              </a>
            </li>
            <li className="nav-item">
              <i className={step?.type.name === "BusinessVerfication" ? "far fa-clock pink" : "far fa-clock"}></i>
              <a
                className="nav-link"
                href="#"
                style={{
                  color:
                    step?.type.name === "BusinessVerfication"
                      ? "#3276E8"
                      : "#5A5A5A",
                }}
              >
                Verification
              </a>
            </li>
            <li className="nav-item">
              <i className= {step?.type.name === "BankAccount" ? "far fa-clock pink" : "far fa-clock"}></i>
              <a
                className="nav-link"
                href="#"
                style={{
                  color:
                    step?.type.name === "BankAccount" ? "#3276E8" : "#5A5A5A",
                }}
              >
                Bank Account
              </a>
            </li>
          </ul>
        </div>
        <div className="right-form-content">{step}</div>
      </div>
      <div className="nextpage-section">
        {!isFirstStep && (
          <input
            type="submit"
            onClick={back}
            className="btn btn-outline-secondary btn"
            value="PREVIOUS"
          />
        )}
        <input
          type="submit"
          onClick={() => nextPage()}
          className="btn btn-secondary btn nextbtn"
          value="NEXT"
        />
      </div>
    </div>
  );
}
