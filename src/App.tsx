import React from 'react';
import jsonData from './api/article/content-types/article/schema.json';
import './App.css';

function App() {
  return <div className="text-black">{JSON.stringify(jsonData)}</div>;
}

export default App;
