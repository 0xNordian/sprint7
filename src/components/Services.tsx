import { useSearchParams } from "react-router-dom";
import WebExtra from "./WebExtra";
import { useEffect, useState } from "react";

type ServicesProps = {
  label: string;
  price: number;
  message: string;
  updateTotal: (label: string, price: number, isChecked: boolean) => void;
  webSubTotal: (spec: string, qty: number) => void;
  isBudgetSubmitted: boolean;
  setBudgetName?: (budgetName: string) => void;
  setClientName?: (clientName: string) => void;
};

const Services = ({
    label,
  price,
  message,
  updateTotal,
  webSubTotal,
  isBudgetSubmitted,
  setBudgetName,
  setClientName,
}: ServicesProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isWebChecked, setIsWebChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams: ", searchParams);

  // Initialize the state of checkboxes based on query parameters when component mounts
  useEffect(() => {
    const isCheckedParam = searchParams.get(label) === "true";
    setIsChecked(isCheckedParam);
  }, [label, searchParams]);

  useEffect(() => {
    resetForm();
    setBudgetName && setBudgetName("");
    setClientName && setClientName("");
    if (isBudgetSubmitted) {
        setSearchParams({});
      }
  }, [isBudgetSubmitted]);

  // Update checkbox states when query parameters change
  useEffect(() => {
    const isCheckedParam = searchParams.get(label) === "true";
    setIsChecked(isCheckedParam);
  }, [label, searchParams]);

  const handleServiceChange = (label: string, price: number) => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);

    // Update the query parameter when the checkbox is clicked
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set(label, newIsChecked.toString());
      return newSearchParams;
    });

    updateTotal(label, price, newIsChecked);
    if (label === "web") {
      setIsWebChecked((prev) => !prev);
    }
  };

  const handleWebSubTotal = (spec: string, qty: number) => {
    webSubTotal(spec, qty);
  };

  const resetForm = () => {
    setIsChecked(false);
    setIsWebChecked(false);
  };

  useEffect(() => {
    const isCheckedParam = searchParams.get(label) === "true";
    isCheckedParam && updateTotal(label, price, isCheckedParam);
  }, [])

  return (
    <>
      <label>
        <input
          checked={isChecked}
          type="checkbox"
          id={label.slice(1)}
          className="exclusive-checkbox"
          onChange={() => handleServiceChange(label, price)}
        />
        {message}
      </label>
      {isWebChecked && isChecked && (
        <div className="web-modal">
          <WebExtra
            spec="numPages"
            message={"Número de páginas"}
            info={"Por favor, indique la cantidad de páginas que le gustaría tener en su sitio web."}
            handleWebSubTotal={handleWebSubTotal}
            modalId="modal_numPages"
          />
          <WebExtra
            spec="numLang"
            message={"Número de idiomas"}
            info={"Por favor, indique la cantidad de idiomas en los que le gustaría que traduzcamos su sitio web."}
            handleWebSubTotal={handleWebSubTotal}
            modalId="modal_numLang"
          />
        </div>
      )}
    </>
  );
};

export default Services;


// import WebExtra from "./WebExtra";
// import { useEffect, useState } from "react";
// import { ServicesProps } from "./BudgetInput";

// const Services = ({ label, price, message, updateTotal, webSubTotal, isBudgetSubmitted, setBudgetName, setClientName }: ServicesProps) => {
//     const [isChecked, setIsChecked] = useState(false);
//     const [isWebChecked, setIsWebChecked] = useState(false);
//     useEffect(() => {
//             resetForm();
//             setBudgetName && setBudgetName("");
//             setClientName && setClientName("");
//         }, [isBudgetSubmitted]);

//     const handleServiceChange = (label: string, price: number) => {
//         setIsChecked(prev => !prev);
//         updateTotal(label, price, !isChecked);
//         if (label === "web") {
//             setIsWebChecked((prev) => !prev);
//         }
//     };
    
//     const handleWebSubTotal = (spec: string, qty: number) => {
//         webSubTotal(spec, qty);
//     }

//     const resetForm = () => {
//         setIsChecked(false);
//         setIsWebChecked(false);
//     };
    
//     return (
//         <>
//             <label>
//                 <input
//                     checked={isChecked}
//                     type="checkbox"
//                     id={label.slice(1)}
//                     className="exclusive-checkbox"
//                     onChange={() => handleServiceChange(label, price)}
//                 />
//                 {message}
//             </label>
//             {
//                 isWebChecked && isChecked && (
//                     <div className="web-modal">
//                         <WebExtra spec="numPages" message={"Número de páginas"} info={"Por favor, indique la cantidad de páginas que le gustaría tener en su sitio web."} handleWebSubTotal={handleWebSubTotal} modalId="modal_numPages"/>
//                         <WebExtra spec="numLang" message={"Número de idiomas"} info={"Por favor, indique la cantidad de idiomas en los que le gustaría que traduzcamos su sitio web."} handleWebSubTotal={handleWebSubTotal} modalId="modal_numLang"/>
//                     </div>
//                 )
//             }
//         </>
//     )
// }

// export default Services