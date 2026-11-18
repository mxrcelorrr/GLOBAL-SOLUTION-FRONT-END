// Versão inicial: só confirma que React + Vite + React Router estão funcionando.
// As rotas reais entram nos próximos commits.
import { Routes, Route } from 'react-router-dom';

function EmConstrucao() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Zela</h1>
      <p>Zeladoria urbana com IA. Projeto em construção.</p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<EmConstrucao />} />
    </Routes>
  );
}
