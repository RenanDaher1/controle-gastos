import React, { useState } from 'react';
import './GastoForm.css';

export function GastoForm({ onAdicionarGasto }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('Alimentação');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');

    // Validação da descrição
    if (!descricao.trim()) {
      setErro('A descrição do gasto é obrigatória.');
      return;
    }

    // Tratamento e validação do valor (aceita vírgula e ponto)
    const valorTratado = valor.replace(',', '.');
    const valorNumerico = parseFloat(valorTratado);

    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      setErro('O valor deve ser um número maior que zero.');
      return;
    }

    // Adiciona o gasto
    onAdicionarGasto({
      descricao: descricao.trim(),
      valor: valorNumerico,
      categoria,
    });

    // Limpa o formulário
    setDescricao('');
    setValor('');
    setCategoria('Alimentação');
  };

  return (
    <form className="gasto-form" onSubmit={handleSubmit}>
      <h2>Novo Gasto</h2>
      
      {erro && <div className="form-error">{erro}</div>}

      <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Ex: Supermercado, Ônibus..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="valor">Valor (R$)</label>
        <input
          type="text"
          id="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="0,00"
        />
      </div>

      <div className="form-group">
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Transporte">Transporte</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros</option>
        </select>
      </div>

      <button type="submit" className="btn-submit">
        Adicionar Gasto
      </button>
    </form>
  );
}
