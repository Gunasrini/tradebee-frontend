import { Link, NavLink, useLocation } from "react-router-dom";
import arrowLeftIcon from "../assets/images/icons/arrow-left.svg";
import onboardingIcon from "../assets/images/icons/onboarding.svg";
import loanDocIcon from "../assets/images/icons/loan-documents.svg";
import notesIcon from "../assets/images/icons/notes.svg";
import logHistoryIcon from "../assets/images/icons/log-history.svg";
import usersIcon from "../assets/images/icons/users.svg";
import settingsIcon from "../assets/images/icons/settings.svg";

function LeftNavbar() {
  const handleClick = (e) => {
    e.preventDefault();
    document.body.classList.toggle("navbar-toggle");
  };

  const location = useLocation();
  const getNavLinkClass = path => {
    return location.pathname === path
      ? "nav-item active"
      : "nav-item";
  };
  return (
    <>
      <div className="left-navbar col-md-2">
        <div className="left-header d-flex align-items-center">
          <span onClick={handleClick}>
            <img src={arrowLeftIcon} />
          </span>
          <h4 className="ms-4">Home</h4>
        </div>
        <ul className="nav flex-column outer-nav">
          <li>
            <div className="d-flex align-items-center">
              <img src={onboardingIcon} />
              <Link to="onboarding/business-kyc" className="nav-link">
                Onboarding
              </Link>
              <i className="fas fa-angle-down"></i>
            </div>
            <div id="onboarding" className="collapse show">
              <ul className="nav submenu">
                <li className={getNavLinkClass("/dashboard/onboarding/business-kyc")}>
                  <i className="far fa-clock pink"></i>
                  <NavLink to="onboarding/business-kyc" className="nav-link">
                    Business KYC
                  </NavLink>
                </li>
                <li className="nav-item">
                  <i className="far fa-clock"></i>
                  <NavLink to="onboarding/management-kyc" className="nav-link">
                    Management KYC
                  </NavLink>
                </li>
                <li className="nav-item">
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
            <div className="d-flex align-items-center">
              <img src={loanDocIcon} />
              <a
                href="#documents"
                className="nav-link"
                data-bs-toggle="collapse"
              >
                Loan Documents
              </a>
              <i className="fas fa-angle-down"></i>
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
            <div className="d-flex align-items-center">
              <img src={notesIcon} />
              <a className="nav-link" href="#">
                Notes
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center">
              <img src={logHistoryIcon} />
              <a className="nav-link" href="#">
                Log History
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center">
              <img src={usersIcon} />
              <a className="nav-link" href="#">
                Users
              </a>
            </div>
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center">
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
