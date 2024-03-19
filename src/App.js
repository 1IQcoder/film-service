import './styles/App.css'
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;







