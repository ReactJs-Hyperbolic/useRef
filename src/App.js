import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <h1>My name is {name} </h1>
      <h2>I rendered {renderCount.current} times. </h2>
    </>
  );
}

export default App;
