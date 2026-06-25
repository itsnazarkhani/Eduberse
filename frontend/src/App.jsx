import { useState, useEffect } from 'react'
import './App.css'

function App() {
   const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then(res => res.json())
      .then(data => setMsg(data.status));
  }, []);

  return (
    <div>
      <h1>Eduberse</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App
