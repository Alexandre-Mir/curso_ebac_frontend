import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  
  const calcularIMC = (e) => {
    e.preventDefault();
    if (!altura || !peso) return;
    
    // Substitui vírgula por ponto se necessário
    const alturaEmMetros = parseFloat(altura.replace(',', '.'));
    const pesoEmKg = parseFloat(peso.replace(',', '.'));
    
    if (alturaEmMetros > 0 && pesoEmKg > 0) {
      const calculo = pesoEmKg / (alturaEmMetros * alturaEmMetros);
      setImc(calculo.toFixed(1));
    }
  }

  const getClassificacao = (valorImc) => {
    if (valorImc < 18.5) return { nome: 'Magreza', classe: 'status-magreza' };
    if (valorImc >= 18.5 && valorImc <= 24.9) return { nome: 'Normal', classe: 'status-normal' };
    if (valorImc >= 25 && valorImc <= 29.9) return { nome: 'Sobrepeso', classe: 'status-sobrepeso' };
    if (valorImc >= 30 && valorImc <= 39.9) return { nome: 'Obesidade', classe: 'status-obesidade' };
    return { nome: 'Obesidade Grave', classe: 'status-grave' };
  }

  const classificacaoAtual = imc ? getClassificacao(Number(imc)) : null;

  return (
    <div className="app-container">
      <div className="calc-card">
        <div className="header">
          <h1>IMC Track</h1>
          <p>Descubra seu Índice de Massa Corporal</p>
        </div>

        <form onSubmit={calcularIMC}>
          <div className="input-group">
            <label htmlFor="altura">Altura</label>
            <div className="input-wrapper">
              <input 
                id="altura"
                type="number" 
                step="0.01"
                placeholder="Ex: 1.75" 
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                required
              />
              <span className="unit">m</span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="peso">Peso</label>
            <div className="input-wrapper">
              <input 
                id="peso"
                type="number" 
                step="0.1"
                placeholder="Ex: 70.5" 
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                required
              />
              <span className="unit">kg</span>
            </div>
          </div>

          <button type="submit" className="btn-calculate">
            Calcular IMC
          </button>
        </form>

        {imc && (
          <div className="result-container">
            <h3>Seu IMC</h3>
            <div className="imc-value">{imc}</div>
            <div className={`classification ${classificacaoAtual.classe}`}>
              {classificacaoAtual.nome}
            </div>

            <table className="bmi-table">
              <thead>
                <tr>
                  <th>Classificação</th>
                  <th>IMC</th>
                </tr>
              </thead>
              <tbody>
                <tr className={imc < 18.5 ? 'active' : ''}>
                  <td>Magreza</td>
                  <td>Menor que 18,5</td>
                </tr>
                <tr className={imc >= 18.5 && imc <= 24.9 ? 'active' : ''}>
                  <td>Normal</td>
                  <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr className={imc >= 25 && imc <= 29.9 ? 'active' : ''}>
                  <td>Sobrepeso</td>
                  <td>Entre 25 e 29,9</td>
                </tr>
                <tr className={imc >= 30 && imc <= 39.9 ? 'active' : ''}>
                  <td>Obesidade</td>
                  <td>Entre 30 e 39,9</td>
                </tr>
                <tr className={imc >= 40 ? 'active' : ''}>
                  <td>Obesidade Grave</td>
                  <td>Maior que 40</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
