import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';
import { ProfileDashboard } from './pages/dashboards/profile/ProfileDashboard';
import { FinancialDashboard } from './pages/dashboards/financial/FinancialDashboard';
import { SalesDashboard } from './pages/dashboards/sales/SalesDashboard';
import { SaoPauloDashboard } from './pages/dashboards/sao_paulo_population/SaoPauloDashboard';
import { SteamGamesDashboard } from './pages/dashboards/steam_games/SteamGamesDashboard';
import { BananaDashboard } from './pages/dashboards/banana/BananaDashboard';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/dashboards/profile" element={<ProfileDashboard />} />
        <Route path="/dashboards/financial" element={<FinancialDashboard />} />
        <Route path="/dashboards/sales" element={<SalesDashboard />} />
        <Route path="/dashboards/sao_paulo_population" element={<SaoPauloDashboard />} />
        <Route path="/dashboards/steam_games" element={<SteamGamesDashboard />} />
        <Route path="/dashboards/banana" element={<BananaDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
