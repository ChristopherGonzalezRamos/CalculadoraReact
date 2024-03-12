import { useState } from 'react'

function App() {
  const [numerouno,setnumerouno]= useState(0);
  const [numerodos,setnumerodos]= useState(0);
  const [resultado,setresultado]= useState(0);

  const handleChangeuno = (event)=>{
    setnumerouno(event.target.value);
  };
  const handleChangedos = (event)=>{
    setnumerodos(event.target.value);
  };

  const handleSumar = (event)=>{
    setresultado(parseFloat(numerouno) + parseFloat(numerodos));
  };

  const handleRestar = (event)=>{
    setresultado(parseFloat(numerouno) - parseFloat(numerodos));
  };

  const handleMultiplicar = (event)=>{
    setresultado(parseFloat(numerouno) * parseFloat(numerodos))
  };

  const handleDividir = (event)=>{
    setresultado(parseFloat(numerouno) / parseFloat(numerodos))
  };

  return (
  <>
     <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Calculadora</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <input type="text" placeholder="Número 1" value={numerouno} onChange={handleChangeuno} style={{ marginRight: '10px' }} />
        <input type="text" placeholder="Número 2" value={numerodos} onChange={handleChangedos} />
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <button onClick={handleSumar} style={{ marginRight: '10px' }}>Sumar</button>
        <button onClick={handleRestar} style={{ marginRight: '10px' }}>Restar</button>
        <button onClick={handleMultiplicar} style={{ marginRight: '10px' }}>Multiplicar</button>
        <button onClick={handleDividir}>Dividir</button>
      </div>
      <hr />
      <p style={{ textAlign: 'center' }}>Resultado: {resultado}</p>
    </div>
  </> 
  );
}

export default App
