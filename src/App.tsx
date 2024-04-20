import { useState } from 'react';
import jsonData from './api/article/content-types/article/schema.json';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return <>{JSON.stringify(jsonData)}</>;
}

export default App;
