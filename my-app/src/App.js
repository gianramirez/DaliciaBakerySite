import './App.css';

import AppRouter from './components/app-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
        <Header />
            <AppRouter />
          <Footer />  
        </BrowserRouter>
  );
}

export default App;

