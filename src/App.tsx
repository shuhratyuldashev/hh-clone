import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Правильный импорт
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import VacancyPage from './pages/VacancyPage';
import Footer from './components/Footer';
import { TooltipProvider } from './components/ui/tooltip';

const App = () => {
  return (
    <Router>
      <TooltipProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<VacancyPage />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </TooltipProvider>
    </Router>
  );
};

export default App;
