import './App.css';
import useTotalHandler from './hooks/useTotalHandler';
import Services from './components/Services';
import data from './utils/dataExtractor'

function App() {
  const { total, subTotal, updateTotal, webSubTotal, budgetHandler } = useTotalHandler();
  // console.log("subTotal: ", subTotal)

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

        <div className="total">Total: {total}€</div>
        <button onClick={budgetHandler}>Submit Budget</button>
        <ul>
          {Object.entries(subTotal).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
        </ul>
        {/* <ul>
          {Object.entries(subTotal).map((items, index) => <li key={index}>{items}</li>)}
        </ul> */}
      </div>
    </>
  );
}

export default App;