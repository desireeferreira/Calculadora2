import React, { useState } from "react";
import "./styles/App.scss";

function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  const capturandoPrimeiroValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const capturandoSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const Soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const Subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const Multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const Divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  // Função para limpar os valores
  const Limpar = () => {
    setPrimeiroValor("");
    setSegundoValor("");
    setResultado("");
  };

  return (
    <main className="main">
      <h1 className="title">Calculadora</h1>
      <input
        className="input"
        placeholder="Insira um número"
        value={primeiroValor || ""}
        onChange={capturandoPrimeiroValor}
      />
      <input
        className="input"
        placeholder="Insira um número"
        value={segundoValor || ""}
        onChange={capturandoSegundoValor}
      />
      <section className="button-section">
        <button className="btn" onClick={Soma}>+</button>
        <button className="btn" onClick={Subtracao}>-</button>
        <button className="btn" onClick={Multiplicacao}>x</button>
        <button className="btn" onClick={Divisao}>/</button>
      </section>
      <button className="btn-clear" onClick={Limpar}>Limpar</button>
      <div className="resultado">{resultado}</div>
    </main>
  );
}

export default App;
