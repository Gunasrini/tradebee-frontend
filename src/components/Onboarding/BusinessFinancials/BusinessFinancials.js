import React from 'react'
import { useMultiStepForm } from '../../../hooks/useMultiStepForm.ts'
import UploadBalanceSheet from './UploadBalanceSheet.js'
import UploadBankDocument from './UploadBankDocument.js'
import GSTInfo from './GSTInfo.js'
import GSTValidation from './GSTValidation.js'

export default function BusinessFinancials() {
    const { step, isFirstStep, isLastStep, back, next } =
        useMultiStepForm([
            <UploadBalanceSheet />,
            <UploadBankDocument />,
            <GSTInfo />,
            <GSTValidation />
        ])

    function nextPage() {
        if (!isLastStep) return next()
        alert("Steps completed!")
    }
    return (
        <div className="subcontent-wrapper">
            <div className="title">
                <h3>Business Financials <span className="inprogress-text text-primary">In Progess</span></h3>
            </div>
            <div className="inner-dashboard">
                <div className="left-navtabs">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <i className="far fa-clock"></i>
                            <a className="nav-link" href="#">Balance Sheet</a>
                        </li>
                        <li className="nav-item">
                            <i className="far fa-clock"></i>
                            <a className="nav-link" href="#">Bank Statement</a>
                        </li>
                        <li className="nav-item">
                            <i className="far fa-clock"></i>
                            <a className="nav-link" href="#">GST Validation</a>
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
