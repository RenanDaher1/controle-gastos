import React from 'react';
import './GastoTotal.css';

export function GastoTotal({ gastos }) {
  const total = gastos.reduce((acc, gasto) => acc + Number(gasto.valor || 0), 0);

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  return (
    <div className="gasto-total-card">
      <span className="total-label">Total de Gastos</span>
      <h2 className="total-valor">
        {formatarMoeda(total)}
      </h2>
    </div>
  );
}
