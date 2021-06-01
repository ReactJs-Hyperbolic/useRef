import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';

function App() {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);

  // const inputRef = useRef();
  const prevName = useRef();

  // function focus() {
  //   inputRef.current.focus();
  //   inputRef.current.value = 'Some value';
  // }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        type='text'
        // ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div>My name is: {name} </div>
      <div>Prev name was: {prevName.current} </div>
      {/* <button onClick={focus}>Focus</button> */}
    </>
  );
}

export default App;
