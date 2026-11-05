import React from 'react';
import './GastoLista.css';

export function GastoLista({ gastos, onRemoverGasto }) {
  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  return (
    <div className="gasto-lista-container">
      <h2>Histórico de Gastos</h2>
      <div className="lista-wrapper">
        {gastos.length === 0 ? (
          <p className="empty-state">Nenhum gasto cadastrado ainda.</p>
        ) : (
          <ul className="gasto-lista">
            {gastos.map((gasto) => (
              <li key={gasto.id} className="gasto-item">
                <div className="gasto-info">
                  <span className="gasto-descricao">{gasto.descricao}</span>
                  <span className="gasto-categoria">{gasto.categoria}</span>
                </div>
                <div className="gasto-acoes">
                  <span className="gasto-valor">
                    {formatarMoeda(gasto.valor)}
                  </span>
                  <button
                    type="button"
                    className="btn-remover"
                    onClick={() => onRemoverGasto(gasto.id)}
                    title="Excluir gasto"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
