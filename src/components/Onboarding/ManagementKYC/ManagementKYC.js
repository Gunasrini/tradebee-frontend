import React from 'react'
import { useMultiStepForm } from '../../../hooks/useMultiStepForm.ts'
import AuthorizedBasicDetails from './AuthorizedBasicDetails.js'
import AuthorizedSignatoryKYC from './AuthorizedSignatoryKYC.js'
import DirectorsBasicInfo from './DirectorsBasicInfo.js'
import DirectorsKYC from './DirectorsKYC.js'

export default function ManagementKYC() {
    const { step, isFirstStep, isLastStep, back, next } =
        useMultiStepForm([
            <AuthorizedBasicDetails />,
            <AuthorizedSignatoryKYC />,
            <DirectorsBasicInfo />,
            <DirectorsKYC />
        ])

    function nextPage() {
        if (!isLastStep) return next()
        alert("Steps completed!")
    }
    return (
        <div className="subcontent-wrapper">
            <div className="title">
                <h3>Management KYC <span className="inprogress-text text-primary">In Progess</span></h3>
            </div>
            <div className="inner-dashboard">
                <div className="left-navtabs">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <i className="far fa-clock"></i>
                            <a className="nav-link" href="#">Authorized Signatory</a>
                        </li>
                        <li className="nav-item">
                            <i className="far fa-clock"></i>
                            <a className="nav-link" href="#">Directors KYC</a>
                        </li>
                    </ul>
                </div>
                <div className="right-form-content">
                    {step}
                </div>
            </div>
            <div className="nextpage-section">
                {!isFirstStep && (<input type="submit" onClick={back} className="btn btn-outline-secondary btn" value="PREVIOUS" />)}
                <input type="submit" onClick={() => nextPage()} className="btn btn-secondary btn" value="NEXT" />
            </div>
        </div>
    )
}
