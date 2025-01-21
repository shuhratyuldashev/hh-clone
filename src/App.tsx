import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Правильный импорт
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import VacancyPage from './pages/VacancyPage';
import Footer from './components/Footer';
import { TooltipProvider } from './components/ui/tooltip';
import { ThemeProvider } from './components/ThemeProvider';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import FavoritesPage from './pages/FavoritesPage';

const App = () => {
  const isUserAuth = false

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <TooltipProvider>
          <Header isAuth={isUserAuth}/>
          <Routes>
            <Route path='/' element={<HomePage isAuth={isUserAuth}/>} />
            <Route path='/:id' element={<VacancyPage isAuth={isUserAuth}/>} /> 
            <Route path="*" element={<NotFound />} />
            {isUserAuth ? <Route path='/favorites' element={<FavoritesPage />} /> 
            : (
              <>
              <Route path='/sign-in' element={<SignInPage />} /> 
              <Route path='/sign-up' element={<SignUpPage />} />
              </>
            )} 
          </Routes>
          <Footer />
        </TooltipProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
