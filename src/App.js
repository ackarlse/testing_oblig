import './App.css';
import { useState } from 'react';
import Welcome from './components/Welcome';

function App() {

  const [name, setName] = useState("Ann-Charlott")
  return (
    <main>
      <Welcome name={name} />
    </main>
     
  );
}

export default App;
