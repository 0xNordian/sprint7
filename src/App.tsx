import { useState } from 'react';
import './App.css';

function App() {
  const [total, setTotal] = useState(0);

  const totalHandler = () => {
    const web = document.querySelector('#web') as HTMLInputElement;
    const seo = document.querySelector('#seo') as HTMLInputElement;
    const ads = document.querySelector('#ads') as HTMLInputElement;
  
    let total = 0;

    (web.checked) ? total += 500 : total -= 0;
    (seo.checked) ? total += 300 : total -= 0;
    (ads.checked) ? total += 200 : total -= 0;

    setTotal(total);
  }

  console.log("total: ", total);

  return (
    <>
      <h2>¿Qué quieres hacer?</h2>
      <div className="services">
        <label>
          <input type="checkbox" name="web" value="web" id="web" className="exclusive-checkbox" onChange={totalHandler}/>
          Una página web (500€)
        </label>
        <label>
          <input type="checkbox" name="seo" value="seo" id="seo" className="exclusive-checkbox" onChange={totalHandler}/>
          Una consultoría SEO (300€)
        </label>
        <label>
          <input type="checkbox" name="ads" value="ads" id="ads" className="exclusive-checkbox" onChange={totalHandler}/>
          Una campanya de Google Ads (200€)
        </label>
      <div className="total">Total: {total}</div>
      </div>
    </>
  );
}

export default App;
