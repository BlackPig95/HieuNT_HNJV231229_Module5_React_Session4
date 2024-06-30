import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ManageEmployee from './assets/components/ManageEmployee';

function App()
{
  const [ count, setCount ] = useState(0);

  return (
    <>
      <ManageEmployee />
    </>
  );
}

export default App;
