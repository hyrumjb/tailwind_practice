import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <body className="bg-blue-50">
      <Header />
      <Routes>
        <Route path="/tailwind_practice/" element={<Home />} />
      </Routes>
      <Footer />
    </body>
  );
}

export default App;