import './App.css';
import useTotalHandler from './hooks/useTotalHandler';
import Services from './components/Services';

function App() {
  const { total, subTotal, updateTotal, webSubTotal } = useTotalHandler();
  console.log("subTotal: ", subTotal)


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
        <Services label={"#web"} price={600} message={"Una página web (600€)"} updateTotal={updateTotal} webSubTotal={webSubTotal}/>
        <Services label={"#seo"} price={300} message={"Una consultoría SEO (300€)"} updateTotal={updateTotal} webSubTotal={webSubTotal}/>
        <Services label={"#ads"} price={400} message={"Una campaña de anuncios (400€)"} updateTotal={updateTotal} webSubTotal={webSubTotal}/>

        <div className="total">Total: {total}€</div>
      </div>
    </>
  );
}

export default App;