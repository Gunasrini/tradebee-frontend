import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrowRight from '../assets/images/icons/arrow-right.svg';
import searchHeader from '../assets/images/icons/search-header.svg';
import notification from '../assets/images/icons/notification.svg';

export default function Navbar() {
    const handleClick = (e) => {
        e.preventDefault();
        document.body.classList.toggle('navbar-toggle');
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm dashboard-navbar">
                <div className="container-fluid">
                    <div className="col-md-12 d-flex">
                        <div className="col-md-4 navbar-logo">
                            <p>Business Onboarding <span className='breadcrumb-arrow'><img src={arrowRight} /></span> Management KYC</p>
                        </div>
                        <div className="col-md-7 d-flex right-search-navbar">
                            <div className="col d-flex align-items-center">
                                <form className="d-flex">
                                    <div className="search-header">
                                        <span className="search-icon"><img src={searchHeader} /></span>
                                        <input className="form-control" type="text" placeholder="Search or type a command (Ctrl + G)" />
                                    </div>
                                </form>
                                <div className="header-notification">
                                    <img src={notification} />
                                    <span className="badge rounded-pill bg-danger">5</span>
                                </div>
                                <div className="profile-info">
                                    {/* <img src="https://demo.dashboardpack.com/adminty-html/files/assets/images/avatar-4.jpg"
                                        className="user-img" /> */}
                                    <span className='username-initial'>M</span>
                                    <span className="username">Mohit Sharma</span>
                                </div>
                            </div>
                            {/* <div className="navbar-right ms-auto d-flex align-items-center">
                                
                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}