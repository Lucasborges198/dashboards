import React from 'react';
import { Link } from 'react-router-dom';
import { useFinancialLogic } from './useFinancialLogic';
import { useDynamicCSS } from '../../../hooks/useDynamicCSS';
import styles from './index.css?inline';

export const FinancialDashboard: React.FC = () => {
  useDynamicCSS(styles);
  useFinancialLogic();

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark"></div>
          <span>Nexus Fin</span>
        </div>
        <nav>
          <Link to="/">&larr; Portfolio</Link>
          <a href="#" className="active">
            Overview
          </a>
          <a href="#">Transactions</a>
          <a href="#">Analytics</a>
          <a href="#">Wallets</a>
        </nav>
        <div className="user-profile">
          <img src="https://i.pravatar.cc/100?img=33" alt="Avatar" />
          <div className="user-info">
            <h4>Alex Mercer</h4>
            <span>Pro Plan</span>
          </div>
        </div>
      </aside>

      <main className="content">
        <header>
          <div>
            <h1>Total Balance</h1>
            <p className="subtitle">Your portfolio is up today</p>
          </div>
          <div className="action-buttons">
            <button className="btn-secondary">Export</button>
            <button className="btn-primary">Add Funds</button>
          </div>
        </header>

        <section className="bento-grid">
          <div className="card balance-card">
            <div className="card-header">
              <h3>Available Funds</h3>
              <span className="badge positive">+14.2%</span>
            </div>
            <h2>$124,592.50</h2>
            <div className="mini-chart" id="balanceChart"></div>
          </div>

          <div className="card expense-card">
            <div className="card-header">
              <h3>Monthly Expenses</h3>
              <span className="badge negative">-2.1%</span>
            </div>
            <h2>$8,240.00</h2>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '45%' }}></div>
            </div>
          </div>

          <div className="card savings-card">
            <div className="card-header">
              <h3>Total Savings</h3>
            </div>
            <h2>$45,800.00</h2>
            <p className="text-sm">Locked in vaults</p>
          </div>

          <div className="card market-card">
            <h3>Market Overview</h3>
            <div className="market-list">
              <div className="market-item">
                <div className="asset">
                  <div className="asset-icon bc"></div>
                  <span>BTC</span>
                </div>
                <div className="asset-price positive">+$1,240 (5.2%)</div>
              </div>
              <div className="market-item">
                <div className="asset">
                  <div className="asset-icon eth"></div>
                  <span>ETH</span>
                </div>
                <div className="asset-price negative">-$42 (1.1%)</div>
              </div>
            </div>
          </div>

          <div className="card transactions-card span-2">
            <h3>Recent Transactions</h3>
            <table className="transaction-table">
              <tbody>
                <tr>
                  <td>
                    <div className="tx-info">
                      <div className="tx-icon sub"></div>
                      <div>
                        <strong>Stripe</strong>
                        <span>Subscription</span>
                      </div>
                    </div>
                  </td>
                  <td className="tx-date">Today, 14:00</td>
                  <td className="tx-amount negative">-$29.00</td>
                  <td>
                    <span className="status complete">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="tx-info">
                      <div className="tx-icon inc"></div>
                      <div>
                        <strong>Upwork</strong>
                        <span>Freelance</span>
                      </div>
                    </div>
                  </td>
                  <td className="tx-date">Yesterday</td>
                  <td className="tx-amount positive">+$2,400.00</td>
                  <td>
                    <span className="status complete">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};
