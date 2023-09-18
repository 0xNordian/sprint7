import './App.css';
// import useTotalHandler from './hooks/useTotalHandler';
import Budget from './components/Budget';
// import Services from './components/Services';
// import data from './utils/dataExtractor'

function App() {

  return (
    <>
      <h2>¿Qué quieres hacer?</h2>
      <div className="services">
        <Budget />
      </div>
    </>
  );
}

export default App;