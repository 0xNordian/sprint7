import './App.css';
import useTotalHandler from './hooks/useTotalHandler';
import Services from './components/Services';
import data from './utils/dataExtractor'
import { useState } from 'react';

function App() {
  const { total, subTotal, budget, webCalc, updateTotal, webSubTotal, budgetHandler } = useTotalHandler();
  const [budgetName, setBudgetName] = useState("");
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
        <label>
          {"Budget title: "}
          <input  
            type="text"
            id={"budget"}
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}/>
        </label>
        <button onClick={() => budgetHandler(budgetName)}>Submit Budget</button>
        <div className="budget">
          {budget.map((item, index) => (
            <div className="budget-card" key={index}>
              <h3>{Object.keys(item)[0]}</h3>
              <ul className="budget-summary">
                <li>
                  <strong>web:</strong> {item[Object.keys(item)[0]].web}
                </li>
                <ul>
                  <li>Number of pages: {item[Object.keys(item)[0]].numPages}</li>
                  <li>Number of languages: {item[Object.keys(item)[0]].numLang}</li>
                </ul>
                <li>
                  <strong>seo:</strong> {item[Object.keys(item)[0]].seo}
                </li>
                <li>
                  <strong>ads:</strong> {item[Object.keys(item)[0]].ads}
                </li>
                <p><strong>Total:</strong> {item[Object.keys(item)[0]].budgetElement}</p>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;