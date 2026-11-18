import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Inicio from './pages/Inicio.jsx';
import Sobre from './pages/Sobre.jsx';
import NaoEncontrada from './pages/NaoEncontrada.jsx';
import Login from './pages/Login.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Privacidade from './pages/Privacidade.jsx';
import Sair from './pages/Sair.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rotas públicas */}
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/sair" element={<Sair />} />

        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}
