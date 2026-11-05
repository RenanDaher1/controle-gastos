import React from 'react';
import './GastoFiltro.css';

export function GastoFiltro({ categoriaSelecionada, onMudarCategoria }) {
  const categorias = ['Todas', 'Alimentação', 'Transporte', 'Lazer', 'Outros'];

  return (
    <div className="gasto-filtro-container">
      <span className="filtro-label">Filtrar por:</span>
      <div className="filtro-botoes">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`btn-filtro ${categoriaSelecionada === cat ? 'ativo' : ''}`}
            onClick={() => onMudarCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
