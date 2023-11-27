import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LegalResearch from './Pages/LegalResearch';
import ContractDrafting from './Pages/ContractDrafting';
import CaseManagement from './Pages/CaseManagement';
import 'animate.css';

const App = () => {
  return (
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/legal-research' element={<LegalResearch />} />
        <Route path='/contract-drafting' element={<ContractDrafting />} />
        <Route path='/case-management' element={<CaseManagement />} />
      </Routes>
  );
};

export default App
