import { Link, NavLink, useLocation } from "react-router-dom";
import arrowLeftIcon from "../assets/images/icons/arrow-left.svg";
import arrowUpIcon from "../assets/images/icons/arrow-up.svg";
import arrowDownIcon from "../assets/images/icons/arrow-down.svg";
import onboardingIcon from "../assets/images/icons/onboarding.svg";
import loanDocIcon from "../assets/images/icons/loan-documents.svg";
import notesIcon from "../assets/images/icons/notes.svg";
import logHistoryIcon from "../assets/images/icons/log-history.svg";
import usersIcon from "../assets/images/icons/users.svg";
import settingsIcon from "../assets/images/icons/settings.svg";

function LeftNavbar() {
  const handleClick = (e) => {
    e.preventDefault();
    // document.body.classList.toggle("navbar-toggle");
  };

  const location = useLocation();
  const getNavLinkClass = path => {
    console.log("location pathname: ", location.pathname);
    console.log("path: ", path);
    return location.pathname === path
      ? "nav-item active"
      : "nav-item";
  };
  return (
    <>
      <div className="left-navbar col-md-2">
        <div className="left-header d-flex align-items-center">
          {/* <span onClick={handleClick}>
            <img src={arrowLeftIcon} />
          </span> */}
          <Link to='/annual-turnover'>
          <span>
            <img src={arrowLeftIcon} />
          </span>
          </Link>
          <h4 className="ms-4">Home</h4>
        </div>
        <ul className="nav flex-column outer-nav">
          <li>
            <div className="d-flex align-items-center main-menu">
              <img src={onboardingIcon} />
              <Link to="onboarding/business-kyc" className="nav-link">
                Onboarding
              </Link>
              {/* <i className="fas fa-angle-down"></i> */}
              <img src={arrowUpIcon} className="icon" />
            </div>
            <div id="onboarding" className="collapse show">
              <ul className="nav submenu">
                <li className={getNavLinkClass("dashboard/onboarding/business-kyc")}>
                  <i className="far fa-clock"></i>  
                  <NavLink to="onboarding/business-kyc" className="nav-link">
                    Business KYC
                  </NavLink>
                </li>
                <li className={getNavLinkClass("dashboard/onboarding/management-kyc")}>
                  <i className="far fa-clock"></i>
                  <NavLink to="onboarding/management-kyc" className="nav-link">
                    Management KYC
                  </NavLink>
                </li>
                <li className={getNavLinkClass("dashboard/onboarding/business-financials")}>
                  <i className="far fa-clock"></i>
                  <NavLink
                    to="onboarding/business-financials"
                    className="nav-link"
                    href="#"
                  >
                    Business Financials
                  </NavLink>
                </li>
                <li className="nav-item">
                  <i className="far fa-clock"></i>
                  <a className="nav-link" href="#">
                    Loan Details
                  </a>
                </li>
                <li className="nav-item">
                  <i className="far fa-clock"></i>
                  <a className="nav-link" href="#">
                    ENach
                  </a>
                </li>
                <li className="nav-item">
                  <i className="far fa-clock"></i>
                  <a className="nav-link" href="#">
                    Approval
                  </a>
                </li>
                <li className="nav-item">
                  <i className="far fa-clock"></i>
                  <a className="nav-link" href="#">
                    ESign
                  </a>
                </li>
                <li className="nav-item">
                  <i className="far fa-clock"></i>
                  <a className="nav-link" href="#">
                    Disbursal
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center main-menu">
              <img src={loanDocIcon} />
              <a
                href="#documents"
                className="nav-link"
                data-bs-toggle="collapse"
              >
                Loan Documents
              </a>
              <img src={arrowDownIcon} className="icon" />
            </div>

            <div id="documents" className="collapse">
              <ul className="nav submenu">
                <li className="nav-item">
                  <i className="far fa-clock"></i>
                  <a className="nav-link" href="#">
                    Aadhar Card
                  </a>
                </li>
                <li className="nav-item">
                  <i className="far fa-clock"></i>
                  <a className="nav-link" href="#">
                    PAN Card
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center main-menu">
              <img src={notesIcon} />
              <a className="nav-link" href="#">
                Notes
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center main-menu">
              <img src={logHistoryIcon} />
              <a className="nav-link" href="#">
                Log History
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center main-menu">
              <img src={usersIcon} />
              <a className="nav-link" href="#">
                Users
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center main-menu">
              <img src={settingsIcon} />
              <a className="nav-link" href="#">
                Settings
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftNavbar;
