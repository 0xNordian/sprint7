import './App.css';
import useTotalHandler from './hooks/useTotalHandler';
import Services from './components/Services';

function App() {
  const { total, subTotal, updateTotal, webSubTotal } = useTotalHandler();
  console.log("subTotal: ", subTotal)

  const servicePrice = {
    web: 600,
    seo: 300,
    ads: 400
  }

  // Custom comparison function to sort by the value
  // const compareByValue = (
  //   a: { [key: string]: number },
  //   b: { [key: string]: number }) => {
  //   const valueA = Object.values(a)[0];
  //   const valueB = Object.values(b)[0];
  //   return valueB - valueA;
  // };

  // Sort subTotal array by value
  // const sortedSubTotal = [...subTotal].sort(compareByValue);
  // console.log("sortedSubTotal: ", sortedSubTotal)

  return (
    <>
      <h2>¿Qué quieres hacer?</h2>

      <div className="services">
        <Services label={"#web"} price={servicePrice.web} message={`Una página web (${servicePrice.web}€)`} updateTotal={updateTotal} webSubTotal={webSubTotal}/>
        <Services label={"#seo"} price={servicePrice.seo} message={`Una consultoría SEO (${servicePrice.seo}€)`} updateTotal={updateTotal} webSubTotal={webSubTotal}/>
        <Services label={"#ads"} price={servicePrice.ads} message={`Una campaña de anuncios (${servicePrice.ads}€)`} updateTotal={updateTotal} webSubTotal={webSubTotal}/>

        <div className="total">Total: {total}€</div>
      </div>
    </>
  );
}

export default App;