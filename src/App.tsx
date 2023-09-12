import { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);

  const totalHandler = (label: string, price: number) => {
    const service = document.querySelector(label) as HTMLInputElement;

    if(service.checked){
      setTotal((prev) => prev + price);
    } else {
      setTotal((prev) => prev - price);
    }
  }

  return (
    <>
      <h2>¿Qué quieres hacer?</h2>
      <div className="services">
        <label>
          <input type="checkbox" name="web" value="web" id="web" className="exclusive-checkbox" onChange={() => totalHandler("#web", 500)}/>
          Una página web (500€)
        </label>
        <label>
          <input type="checkbox" name="seo" value="seo" id="seo" className="exclusive-checkbox" onChange={() => totalHandler("#seo", 300)}/>
          Una consultoría SEO (300€)
        </label>
        <label>
          <input type="checkbox" name="ads" value="ads" id="ads" className="exclusive-checkbox" onChange={() => totalHandler("#ads", 200)}/>
          Una campanya de Google Ads (200€)
        </label>
      <div className="total">Total: {total}</div>
      </div>
    </>
  );
}

export default App;
