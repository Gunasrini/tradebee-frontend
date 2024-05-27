import { Route, Routes } from "react-router-dom"
import ManagementKYC from "./ManagementKYC/ManagementKYC"
import BusinessKYC from "./BusinessKYC/BusinessKYC"
import BusinessFinancials from "./BusinessFinancials/BusinessFinancials"
export default function OnBoarding() {

    return (
        <div className="right-content">
            <div className="content-header">
                <h1>Business Onboarding <span className="inprogress-text text-primary">In Progess</span></h1>
                <h3><strong>Legal Name:</strong> ABC Exports Limited</h3>
            </div>
            <Routes>
                <Route path="business-kyc" element={<BusinessKYC />}></Route>
                <Route path="management-kyc" element={<ManagementKYC />}></Route>
                <Route path="business-financials" element={<BusinessFinancials />}></Route>
            </Routes>
        </div>
    )
}