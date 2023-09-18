import './App.css';
import useTotalHandler from './hooks/useTotalHandler';
import Services from './components/Services';
import data from './utils/dataExtractor'
import Budget from './components/Budget';

function App() {
  const { total, subTotal, budget, webCalc, updateTotal, webSubTotal, budgetHandler } = useTotalHandler();

  return (
    <>
      <h2>¿Qué quieres hacer?</h2>

      <div className="services">
        {data.map((service =>
          <Services
            key={service.id}
            label={`${service.name}`}
            price={service.price}
            message={service.title}
            updateTotal={updateTotal}
            webSubTotal={webSubTotal}
          />))}

        <div className="total">Total: {total + webCalc}€</div>
          <Budget budget={budget} budgetHandler={budgetHandler}/>
      </div>
    </>
  );
}

export default App;