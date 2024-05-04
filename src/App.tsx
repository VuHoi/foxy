import React from 'react';
import jsonData from './api/article/content-types/article/schema.json';
import './App.css';

function App() {
  return <>{JSON.stringify(jsonData)}</>;
}

export default App;
