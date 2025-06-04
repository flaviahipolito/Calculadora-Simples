import React, { useState } from 'react';

export default function Calculadora() {
  const [visor, setVisor] = useState('');

  function adicionar(valor) {
    setVisor(visor + valor);
  }

  function limpar() {
    setVisor('');
  }

  function calcular() {
    try {
      setVisor(String(eval(visor)));
    } catch {
      setVisor('Erro');
    }
  }

  return (
    <div
      className="calculadora"
      style={{
        maxWidth: 280,
        margin: '40px auto',
        padding: 20,
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      }}
    >
      <input
        type="text"
        value={visor}
        disabled
        style={{
          color: '#000', // texto preto forte
          backgroundColor: '#fff',
          opacity: 1,
          width: '100%',
          height: 50,
          fontSize: 24,
          textAlign: 'right',
          marginBottom: 10,
          padding: 10,
          borderRadius: 8,
          border: '1px solid #ccc',
          caretColor: 'auto',
        }}
      />
      <div
        className="botoes"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 10,
        }}
      >
        <button onClick={limpar}>C</button>
        <button onClick={() => adicionar('/')}>/</button>
        <button onClick={() => adicionar('*')}>*</button>
        <button onClick={() => adicionar('-')}>-</button>

        <button onClick={() => adicionar('7')}>7</button>
        <button onClick={() => adicionar('8')}>8</button>
        <button onClick={() => adicionar('9')}>9</button>
        <button onClick={() => adicionar('+')}>+</button>

        <button onClick={() => adicionar('4')}>4</button>
        <button onClick={() => adicionar('5')}>5</button>
        <button onClick={() => adicionar('6')}>6</button>
        <button onClick={calcular}>=</button>

        <button onClick={() => adicionar('1')}>1</button>
        <button onClick={() => adicionar('2')}>2</button>
        <button onClick={() => adicionar('3')}>3</button>
        <button onClick={() => adicionar('0')}>0</button>

        <button onClick={() => adicionar('.')}>.</button>
      </div>
    </div>
  );
}
