import './App.css';
import useTotalHandler from './hooks/useTotalHandler';
import Services from './components/Services';

function App() {
  const { total, updateTotal } = useTotalHandler();

  return (
    <>
      <h2>¿Qué quieres hacer?</h2>

      <div className="services">
        <Services label={"#web"} price={600} message={"Una página web (600€)"} updateTotal={updateTotal} />
        <Services label={"#seo"} price={300} message={"Una consultoría SEO (300€)"} updateTotal={updateTotal} />
        <Services label={"#ads"} price={400} message={"Una campaña de anuncios (400€)"} updateTotal={updateTotal} />

        <div className="total">Total: {total}€</div>
      </div>
    </>
  );
}

export default App;