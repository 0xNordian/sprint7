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
};

const Services = ({ label, price, message, updateTotal, webSubTotal, isBudgetSubmitted, setBudgetName }: ServicesProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isWebChecked, setIsWebChecked] = useState(false);
    useEffect(() => {
            resetForm();
            setBudgetName && setBudgetName("");
        }, [isBudgetSubmitted]);

    const handleServiceChange = (label: string, price: number) => {
        setIsChecked(prev => !prev);
        updateTotal(label, price, !isChecked);
        if (label === "web") {
            setIsWebChecked((prev) => !prev);
        }
    };
    
    const handleWebSubTotal = (spec: string, qty: number) => {
        webSubTotal(spec, qty);
    }

    const resetForm = () => {
        setIsChecked(false);
        setIsWebChecked(false);
    };
    
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
            {
                isWebChecked && isChecked && (
                    <div className="web-modal">
                        <WebExtra spec="numPages" message={"Número de páginas"} info={"Por favor, indique la cantidad de páginas que le gustaría tener en su sitio web."} handleWebSubTotal={handleWebSubTotal} modalId="modal_numPages"/>
                        <WebExtra spec="numLang" message={"Número de idiomas"} info={"Por favor, indique la cantidad de idiomas en los que le gustaría que traduzcamos su sitio web."} handleWebSubTotal={handleWebSubTotal} modalId="modal_numLang"/>
                    </div>
                )
            }
        </>
    )
}

export default Services