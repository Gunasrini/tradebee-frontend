import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SetPassword from './components/SetPassword';
import ChangePassword from './components/ChangePassword';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import OnBoarding from './components/Onboarding/Onboarding';
import EmploymentType from './components/EmploymentType';
import DesiredLoanAmount from './components/DesiredLoanAmount';
import GrossAnnualTurnover from './components/GrossAnnualTurnover';
import TestFormApi from './TestFormApi';

function App() {
  return (

    <Routes>
      <Route path='/' element={<TestFormApi />} />
      <Route path='/register' element={<Register />} />
      <Route path='/set-password' element={<SetPassword />} />
      <Route path='/change-password' element={<ChangePassword />} />
      <Route path='/dashboard/*' element={<Dashboard />}>
        <Route path='onboarding' element={<OnBoarding />} />
      </Route>
      <Route path='/employment-type' element={<EmploymentType />} />
      <Route path='/loan-amount' element={<DesiredLoanAmount />} />
      <Route path='/annual-turnover' element={<GrossAnnualTurnover />} />


    </Routes>
  );
}

export default App;
