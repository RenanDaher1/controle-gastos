import React, { useState } from 'react';
import { GastoForm } from './components/GastoForm';
import { GastoLista } from './components/GastoLista';
import { GastoTotal } from './components/GastoTotal';
import { GastoFiltro } from './components/GastoFiltro';
import './App.css';

function App() {
  const [gastos, setGastos] = useState([
    { id: 1, descricao: 'Almoço no Restaurante', valor: 45.90, categoria: 'Alimentação' },
    { id: 2, descricao: 'Passagem de Metrô', valor: 5.00, categoria: 'Transporte' },
    { id: 3, descricao: 'Cinema com amigos', valor: 35.00, categoria: 'Lazer' },
  ]);

  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');

  const handleAdicionarGasto = (novoGasto) => {
    const gastoComId = {
      ...novoGasto,
      id: Date.now(),
    };
    setGastos((prevGastos) => [gastoComId, ...prevGastos]);
  };

  const handleRemoverGasto = (id) => {
    setGastos((prevGastos) => prevGastos.filter((gasto) => gasto.id !== id));
  };

  const gastosFiltrados = categoriaFiltro === 'Todas'
    ? gastos
    : gastos.filter((gasto) => gasto.categoria === categoriaFiltro);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Controle de Gastos</h1>
        <p>Gerencie suas finanças pessoais de forma simples</p>
      </header>

      <main className="app-main">
        <GastoTotal gastos={gastosFiltrados} />
        <GastoForm onAdicionarGasto={handleAdicionarGasto} />
        <GastoFiltro
          categoriaSelecionada={categoriaFiltro}
          onMudarCategoria={setCategoriaFiltro}
        />
        <GastoLista gastos={gastosFiltrados} onRemoverGasto={handleRemoverGasto} />
      </main>
    </div>
  );
}

export default App;
