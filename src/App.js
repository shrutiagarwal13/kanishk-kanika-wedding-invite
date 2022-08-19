import './App.css';
import MainPage from './pages/MainPage';
import BrowserRouter from 'react-router-dom/BrowserRouter';
// import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='/wedding-invitation-website'>
        <MainPage exact path='/' />
        {/* <ErrorPage exact path='/' /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
