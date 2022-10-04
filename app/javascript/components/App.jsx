import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';

export default function App () {
  return <Home />
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
});
