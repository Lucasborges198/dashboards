import React from 'react';
import { Link } from 'react-router-dom';
import { useSaoPauloLogic } from './useSaoPauloLogic';
import { useDynamicCSS } from '../../../hooks/useDynamicCSS';
import styles from './index.css?inline';

export const SaoPauloDashboard: React.FC = () => {
  useDynamicCSS(styles);
  useSaoPauloLogic();

  return (
    <div className="wrapper">
      <header className="editorial-header">
        <Link
          to="/"
          style={{
            display: 'inline-block',
            marginBottom: '1.5vw',
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontFamily: 'var(--font-sans)',
          }}
        >
          &larr; Voltar ao Menu
        </Link>
        <div className="meta-label">Estudo Demográfico Anual :: 2026</div>
        <h1 className="monumental-title">
          A Metrópole
          <br />
          <i>sem fim.</i>
        </h1>
        <p className="lede">
          Análise da distribuição populacional, gentrificação e expansão horizontal da Região
          Metropolitana de São Paulo.
        </p>
      </header>

      <main className="grid-layout">
        {/* Big Stat */}
        <article className="stat-block span-2">
          <h2 className="stat-value" id="totalPop">
            11.451.245
          </h2>
          <div className="stat-label">
            <span>Habitantes (Munícipio)</span>
            <span className="trend">+0.8% YoY</span>
          </div>
        </article>

        {/* Density */}
        <article className="stat-block">
          <h2 className="stat-value">7.8k</h2>
          <div className="stat-label">
            <span>Habitantes / km²</span>
          </div>
          <div className="minimal-bar">
            <div className="fill" style={{ width: '85%' }}></div>
          </div>
        </article>

        {/* Zones */}
        <section className="zones-section span-all">
          <h3 className="section-title">Distribuição por Zonas</h3>
          <div className="zones-grid">
            <div className="zone-item">
              <h4>Zona Sul</h4>
              <div className="z-value">3.2M</div>
              <p>Maior concentração territorial e disparidade social.</p>
            </div>
            <div className="zone-item">
              <h4>Zona Leste</h4>
              <div className="z-value">4.6M</div>
              <p>Alta densidade demográfica, força de trabalho.</p>
            </div>
            <div className="zone-item">
              <h4>Zona Oeste</h4>
              <div className="z-value">1.1M</div>
              <p>Menor densidade, maior verticalização de luxo.</p>
            </div>
            <div className="zone-item">
              <h4>Zona Norte</h4>
              <div className="z-value">2.3M</div>
              <p>Crescimento horizontal e transição ambiental.</p>
            </div>
          </div>
        </section>

        {/* Migration */}
        <article className="stat-block span-3 interactive-panel">
          <div className="panel-header">
            <h3 className="section-title">Fluxo Migratório</h3>
            <button className="minimal-btn">Ver Matriz</button>
          </div>
          <div className="flow-placeholder">
            <p className="insight-text">
              O fluxo de entrada no estado concentra-se no Eixo Bandeirantes, e a capital sofre
              evasão lenta de classe média para o interior.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};
